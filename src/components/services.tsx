"use client";
import { services } from "@/app/_utils/services";
import Aos from "aos";
import "aos/dist/aos.css";
import { CheckIcon } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex mt-24 flex-col">
      <div className="text-center">
        <h2 data-aos="fade-up" className="px-4">
          Porque contratar nossos serviços?
        </h2>
        <p data-aos="fade-right" className="text-zinc-500 mt-4">
          A Detetive Lima pode te ajudar a resolver com sigilo, profissionalismo
          e veracidade.
        </p>
      </div>

      <div
        data-aos="fade-right"
        className="mt-12 gap-4 grid grid-cols-2  items-center m-auto justify-center"
      >
        {services.map((service, index) => (
          <div
            className="flex items-center text-center mx-auto justify-center w-full "
            key={index}
          >
            <CheckIcon className="text-green-500 shrink-0" size={22} />
            <p className="text-sm ml-2 flex-1 text-left">{service.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="px-4 text-lg">
          E o principal, o atendimento é 24h! Nos chame no WhatsApp.
        </h2>
        <Button className="mt-6 bg-green-500 text-secondary">
          Contratar serviço
        </Button>
      </div>
    </div>
  );
};

export default Services;
