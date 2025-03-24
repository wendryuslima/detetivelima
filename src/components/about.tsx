"use client";

import { about } from "@/app/_utils/about";

import "aos/dist/aos.css";
import Image from "next/image";



const About = () => {
  
  return (
    <div
      id="about"
      className="mt-36 flex h-full flex-col items-center justify-center p-5"
    >
      <div className="mb-4 gap-4 text-center">
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

      <div className="mt-10 justify-center gap-6 pb-10 text-center">
        <Image
          data-aos="fade-left"
          className="m-auto justify-center gap-4"
          src="/selo-verificacao.png"
          alt="/"
          width={120}
          height={120}
        />
        <div data-aos="fade-right" className="mt-4 space-y-4">
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
