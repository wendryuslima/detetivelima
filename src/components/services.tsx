"use client";
import { services } from "@/app/_utils/services";
import Aos from "aos";
import "aos/dist/aos.css";
import { CheckIcon } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Services = () => {
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    Aos.init();
  }, []);
  return (
    <section id="services" className="mt-24 flex flex-col">
      <div className="text-center">
        <h2 data-aos="fade-up" className="px-4">
          Porque contratar nossos serviços?
        </h2>
        <p data-aos="fade-right" className="mt-4 text-zinc-500">
          A Detetive Lima pode te ajudar a resolver com sigilo, profissionalismo
          e veracidade.
        </p>
      </div>

      <div
        data-aos="fade-right"
        className="m-auto mt-12 grid grid-cols-2 items-center justify-center gap-4"
      >
        {services.map((service, index) => (
          <div
            className="mx-auto flex w-full items-center justify-center text-center"
            key={index}
          >
            <CheckIcon className="shrink-0 text-green-500" size={22} />
            <p className="ml-2 flex-1 text-left text-sm">{service.name}</p>
          </div>
        ))}
      </div>

      <div data-aos="fade-right" className="mt-12 text-center">
        <h2 className="px-4 text-lg">
          E o principal, o atendimento é 24h! Nos chame no WhatsApp.
        </h2>
        <Link href="https://wa.me/5511975104376?text=Olá!%20Quero%20mais%20informações">
          <Button className="mt-6 bg-green-500 text-secondary">
            Contratar serviço
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
