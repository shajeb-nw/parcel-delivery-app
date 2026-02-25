const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.s8q0gja.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const parcelInfo = client.db("parcelInfo");
    const userInfo = parcelInfo.collection("userInfo");

    //  user parcel sender crud operator
    app.post("/user", async (req, res) => {
      const collect = req.body;
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
