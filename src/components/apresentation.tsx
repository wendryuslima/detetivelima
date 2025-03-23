import Image from "next/image";

const Apresentation = () => {
  return (
    <div className="justify-center flex flex-col items-center ">
      <div className="relative w-full h-[300px]">
        <Image
          src="/aguia.jpg"
          alt="Detetive particular"
          fill
          className="object-cover rounded-lg"
        />

      
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-4 text-center rounded-lg">
          <h2 className="text-4xl font-bold uppercase">Detetive Particular</h2>
          <p className="text-zinc-300 mt-2">
            Porque a confiança é essencial. Vamos trazer a verdade à tona.
          </p>
          <h1 className="text-lg font-semibold mt-4">
            PRECISANDO DO SERVIÇO DE INVESTIGAÇÃO? <br />
            ATENDIMENTO 24 HORAS <br />
            (11) 9 8997-2837
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Apresentation;
