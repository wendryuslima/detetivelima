"use client";

import { qualities } from "@/app/_utils/qualities";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2  text-center gap-8 bg-white  items-center  justify-center p-8">
        {qualities.map((item, index) => (
          <div
            className="items-center flex flex-col  justify-center text-center"
            key={index}
            data-aos="fade-left"
          >
            <Image
              className=""
              src={item.image}
              width={60}
              height={60}
              alt="clock"
            />
            <h1 className="text-slate-950 font-semibold uppercase">
              {item.title}
            </h1>
            <p className="text-zinc-700 w-[200px] ">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex m-auto pb-6  bg-white w-full flex-col items-center text-center justify-center">
        <Image
          className=""
          src="/price.jpg"
          width={60}
          height={60}
          alt="clock"
          data-aos="fade-left"
        />
        <h1
          data-aos="fade-left"
          className="text-slate-950 font-semibold uppercase"
        >
          Preço justo
        </h1>
        <p data-aos="fade-left" className="text-zinc-700 w-[200px] ">
          Quanto vale a pena pagar para descobrir a verdade?
        </p>
      </div>
    </>
  );
};

export default Hero;
