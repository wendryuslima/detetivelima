import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Security = () => {
  return (
    <div className="justify-center bg-white flex flex-col items-center ">
      <div
        data-aos="fade-up"
        className="text-center justify-center items-center flex flex-col"
      >
        <h2 className="text-primary mt-12">Segurança</h2>
        <Image
          className="bg-white"
          src="/locked.png"
          alt="/"
          height={100}
          width={100}
        />
      </div>

      <div data-aos="fade-right" className="text-center pb-4 justify-center">
        <h1 className="text-primary text-center mt-4">
          NÃO DISPONIBILIZAMOS SEUS DADOS, O PROCESSO É 100% SIGILOSO E SEGURO.
        </h1>
        <Link href="https://wa.me/5511975104376?text=Olá!%20Quero%20mais%20informações">
          <Button className="mt-6 px-3 bg-green-400">
            Falar com a detetive
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Security;
