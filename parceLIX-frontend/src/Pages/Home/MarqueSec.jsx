import React from "react";
import Container from "../../Component/Container/Container";
import amazon from "../../assets/amazon.png";
import amazonvc from "../../assets/amazon_vector.png";
import casio from "../../assets/casio.png";
import monstar from "../../assets/moonstar.png";
import randstad from "../../assets/randstad.png";
import star from "../../assets/star.png";
import starp from "../../assets/start_people.png";
import Marquee from "react-fast-marquee";
const MarqueSec = () => {
  const logos = [amazonvc, casio, monstar, randstad, star, starp, amazon];
  return (
    <section className="py-10">
      <Container>
        <h1 className="text-center text-2xl font-bold text-black/70 capitalize relative max-[550px]:text-[18px]">
          We've helped thousands of sales teams
          <span className="w-12 h-0.75  bg-amber-500 rounded-2xl absolute top-8 right-[48%]"></span>
        </h1>
        <div className="mt-5 px-20 max-[875px]:px-0 m-auto relative">
          <div className=" absolute left-20 top-0 h-full w-20 z-100  bg-linear-r from-white to-black content-none"></div>
          <Marquee pauseOnHover gradient={false} speed={50}>
            <div className="flex items-center gap-5">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="company logo"
                  className="w-20 object-contain"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </Container>
    </section>
  );
};

export default MarqueSec;
