import { Typewriter } from "react-simple-typewriter";
import parceDelivery from "../../assets/parcelDelivery.png";
import deliveryimg from "../../assets/deliveryimg.png";
import Container from "../../Component/Container/Container";
const Hero = () => {
  return (
    <section className="bg-white">
      <Container className="grid grid-cols-2 max-[1075px]:grid-cols-1 max-[1075px]:gap-10 max-[500px]:py-10 items-center gap-2 py-20 max-[1075px]:py-15">
        {/* LEFT CONTENT */}
        <div>
          {/* small image */}
          <div className="flex items-center gap-2 mb-2 text-slate-600">
            <img src={deliveryimg} alt="" className="w-25" />
          </div>

          {/* Heading */}
          <h1 className="text-[45px] max-[1075px]:w-175 max-[800px]:w-full max-[560px]:text-[40px] max-[510px]:text-[30px] max-[395px]:text-[25px] font-extrabold leading-tight text-slate-900">
            We Make Sure Your <span className="text-color">Parcel Arrives</span>{" "}
            On Time
            <br />
            <span>
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={["– No Fuss.", "– No Delays"]}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-lg text-slate-600 text-base leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex items-center gap-4 max-[420px]:flex-col">
            <button className="flex items-center gap-2 cursor-pointer background-color text-white px-6 py-3 rounded-full font-semibold">
              Track Your Parcel
              <span className="w-6 h-6 flex items-center justify-center text-white rounded-full text-2xl">
                ↗
              </span>
            </button>

            <button className="px-6 py-3 cursor-pointer rounded-full border border-slate-300 font-medium hover:bg-slate-100">
              Be A Rider
            </button>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="">
          <img
            src={parceDelivery}
            alt="Parcel Delivery Illustration"
            className="w-full rounded-xl"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
