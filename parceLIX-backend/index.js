const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.s8q0gja.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// tracking id functon
function createTransactionId() {
  const random = Math.floor(Math.random() * 10000);
  return "TRX-" + Date.now() + "-" + random;
}

async function run() {
  try {
    await client.connect();

    const parcelInfo = client.db("parcelInfo");
    const userInfo = parcelInfo.collection("userInfo");
    const paymentCollection = parcelInfo.collection("PaymentStatus");

    //  user parcel sender crud operator
    app.post("/user", async (req, res) => {
      const collect = req.body;
      collect.createAt = new Date().toISOString();
      const mainValu = await userInfo.insertOne(collect);
      res.send(mainValu);
    });
    app.get("/user", async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query.senderEmail = email;
      }
      let cursor = userInfo.find(query);
      let result = await cursor.toArray();
      res.send(result);
    });
    //  payment get operator
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userInfo.findOne(query);
      res.send(result);
    });
    app.delete("/user/:id", async (req, res) => {
      let id = req.params.id;
      let query = { _id: new ObjectId(id) };
      let result = await userInfo.deleteOne(query);
      res.send(result);
    });
    app.post("/payment", async (req, res) => {
      const data = req.body;

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: data.parcelName,
              },
              unit_amount: data.cost * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        customer_email: data?.senderEmail,
        metadata: {
          parcelId: data?.parcelId,
          parcelName: data?.parcelName,
        },
        success_url: `${process.env.PARCELX_FONTEND}/deashbord/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.PARCELX_FONTEND}/deashbord/payment-cancel`,
      });
      res.json({ url: session.url });
    });

    app.patch("/payment-success", async (req, res) => {
      let params = req.query.session_id;
      const session = await stripe.checkout.sessions.retrieve(params);
      console.log(session);
      
      const existPayment = await paymentCollection.findOne({
        transationId: session.payment_intent,
      });
      if (existPayment) {
        return;
      }
      if (session.payment_status === "paid") {
        const id = session.metadata.parcelId;
        const query = { _id: new ObjectId(id) };
        const update = {
          $set: {
            payment_status: "paid",
          },
        };
        const result = await userInfo.updateOne(query, update);

        res.send(result);
      }
      const paymentInfo = {
        totalAmount: session?.amount_total / 100,
        senderEmail: session?.customer_email,
        parcelId: session?.metadata?.parcelId,
        parcelName: session?.metadata?.parcelName,
        transationId: session?.payment_intent,
        paymentStatus: session?.payment_status,
        paidAt: new Date(),
        trackingId: createTransactionId(),
      };
      if (session.payment_status === "paid") {
        const paymentUser = await paymentCollection.insertOne(paymentInfo);
        res.send(paymentUser);
      }
    });

    // payment histrory collect
     app.get("/payment" ,async(req,res)=>{
        const email=req.query.email
        const query={}
        if(email){
          query.senderEmail=email
        }
        let cursor=paymentCollection.find(query)
        let result=await cursor.toArray()
        res.send(result)
     })
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Parcel Delivery App");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
