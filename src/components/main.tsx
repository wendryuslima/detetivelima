"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Depoiments from "./depoiments";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex  w-full flex-col justify-center items-center">
      {/* {image} */}
      <div className="text-center mt-12 items-center justify-center">
        <h1 className="text-4xl text-black animate-blink">*LAST UNITS!</h1>
      </div>
      <div data-aos="fade-left" className="mt-12">
        <Image src="/prime-bio.png" width={300} height={300} alt="prime-bio" />
      </div>

      {/* {texto} */}
      <div
        data-aos="fade-right"
        className="items-left p-4 text-center justify-left mt-4 relative"
      >
        <h1 className="font-semibold text-black text-4xl relative">
          Torch fat effortlessly and unlock
        </h1>
        <h1 className="font-semibold text-black text-4xl relative">
          your best body—fast
        </h1>
        <h1 className="font-semibold text-black text-4xl relative">
          natural, and unstoppable!
        </h1>
        <div className="absolute inset-0 bg-white/60 blur-lg rounded-full w-4/5 h-4/5 mx-auto"></div>
      </div>

      <div
        data-aos="fade-right"
        className="p-5 text-left  gap-4 leading-relaxed text-white"
      >
        <p>
          Skin cell turnover rejuvenates skin by replacing old cells with new
          ones. This process is important to maintain in order to support
          healthy aging, optimal gut health and for the appearance of healthy
          youthful skin. PrimeBiome supports beneficial bacteria, helping to
          promote better skin health and a more youthful appearance.
        </p>
      </div>
      <Depoiments />

      <div data-aos="fade-up" className="mt-4 p-4">
        <Image
          src="/certifications_new.png"
          width={400}
          height={400}
          alt="certifications"
        />
      </div>

      <div className="bg-[#18181b] items-left p-4 gap-4 w-full">
        <div data-aos="fade-right" className="flex flex-row mb-4 items-center">
          <Image src="/checkmark2.png" height={50} width={50} alt="check" />{" "}
          <h1 className="text-white ml-12 text-2xl">Fat Burning Boost</h1>
        </div>
        <div data-aos="fade-right" className="flex flex-row mb-4 items-center">
          <Image src="/checkmark2.png" height={50} width={50} alt="check" />{" "}
          <h1 className="text-white ml-12 text-2xl">Metabolism Support</h1>
        </div>
        <div className="flex flex-row mb-4 items-center">
          <Image src="/checkmark2.png" height={50} width={50} alt="check" />{" "}
          <h1 className="text-white ml-12 text-2xl">Natural Energy</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
