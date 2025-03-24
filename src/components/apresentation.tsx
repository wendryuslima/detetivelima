import Image from "next/image";

const Apresentation = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-[300px] w-full">
        <Image
          src="/aguia.jpg"
          alt="Detetive particular"
          fill
          className="rounded-lg object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/50 p-4 text-center text-white">
          <h2 className="text-4xl font-bold uppercase">Detetive Particular</h2>
          <p className="mt-2 text-zinc-300">
            Porque a confiança é essencial. Vamos trazer a verdade à tona.
          </p>
          <h1 className="mt-4 text-lg font-semibold">
            PRECISANDO DO SERVIÇO DE INVESTIGAÇÃO? <br />
            ATENDIMENTO 24 HORAS <br />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Apresentation;
