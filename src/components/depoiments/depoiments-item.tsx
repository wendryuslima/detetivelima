import { Depoiments } from "@/app/_utils/depoiments";
import { StarIcon } from "lucide-react";

const DepoimentsItem = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-4 p-4 text-center">
      <div
        data-aos="fade-left"
        className="mb-12 flex flex-col items-center justify-center"
      >
        {Depoiments.map((depoiments, index) => (
          <div className="border-b border-solid" key={index}>
            <h1 className="mt-12 font-bold">{depoiments.name}</h1>
            <p className="p-6 text-zinc-400">{depoiments.description}</p>
            <div
              data-aos="fade-up"
              className="mx-auto mb-4 flex items-center justify-center text-center"
            >
              <StarIcon className="h-6 w-6" fill="yellow" />
              <StarIcon className="h-6 w-6" fill="yellow" />
              <StarIcon className="h-6 w-6" fill="yellow" />
              <StarIcon className="h-6 w-6" fill="yellow" />
              <StarIcon className="h-6 w-6" fill="yellow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepoimentsItem;
