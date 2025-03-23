"use client";

import { about } from "@/app/_utils/about";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="flex h-[100vh] mt-24  flex-col items-center  p-5 justify-center ">
      <div className="text-center gap-4 mb-4 ">
        <h2 data-aos="fade-up" className="mb-4 text-destructive">
          Sobre nós
        </h2>
        <div data-aos="fade-right" className="mb-4 text-zinc-400">
          {about.map((name, index) => (
            <div key={index}>
              <p>{name.description1}</p>
            </div>
          ))}
        </div>
        <div data-aos="fade-right" className="text-zinc-400">
          {about.map((item, index) => (
            <div key={index}>
              <p>{item.description2}</p>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default About;
