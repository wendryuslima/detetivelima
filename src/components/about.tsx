"use client";

import { about } from "@/app/_utils/about";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      id="about"
      className="flex h-full mt-36 flex-col items-center  p-5 justify-center"
    >
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

      <div className="mt-10 text-center gap-6 justify-center">
        <Image
          data-aos="fade-left"
          className=" gap-4 m-auto  justify-center"
          src="/selo-verificacao.png"
          alt="/"
          width={120}
          height={120}
        />
        <div data-aos="fade-right" className="space-y-4 mt-4">
          <h1 className="font-bold uppercase">
            + 700 clientes por todo Brasil
          </h1>
          <h1 className="font-bold uppercase">Atendimento personalizado</h1>
          <h1 className="font-bold uppercase">
            Equipe com mais de 5 profissionais treinados e capacitados
          </h1>
          <h1 className="font-bold uppercase">Equipamento de ponta</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
