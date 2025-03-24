import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Security = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center text-center"
      >
        <h2 className="mt-12 text-primary">Segurança</h2>
        <Image
          className="bg-white"
          src="/locked.png"
          alt="/"
          height={100}
          width={100}
        />
      </div>

      <div data-aos="fade-right" className="justify-center pb-4 text-center">
        <h1 className="mt-4 px-6 text-center text-primary">
          NÃO DISPONIBILIZAMOS SEUS DADOS, O PROCESSO É 100% SIGILOSO E SEGURO.
        </h1>
        <Link href="https://wa.me/5511975104376?text=Olá!%20Quero%20mais%20informações">
          <Button className="mt-6 bg-green-400 px-3">
            Falar com a detetive
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Security;
