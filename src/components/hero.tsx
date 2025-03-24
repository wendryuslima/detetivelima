"use client";

import { qualities } from "@/app/_utils/qualities";

import "aos/dist/aos.css";
import Image from "next/image";


const Hero = () => {
 
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center gap-8 bg-white p-8 text-center">
        {qualities.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center text-center"
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
            <h1 className="font-semibold uppercase text-slate-950">
              {item.title}
            </h1>
            <p className="text-zinc-700">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="m-auto flex w-full flex-col items-center justify-center bg-white pb-6 text-center">
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
          className="font-semibold uppercase text-slate-950"
        >
          Preço justo
        </h1>
        <p data-aos="fade-left" className="w-[200px] text-zinc-700">
          Quanto vale a pena pagar para descobrir a verdade?
        </p>
      </div>
    </>
  );
};

export default Hero;
