import { StarIcon } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Depoiments = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-12 p-4">
      <div data-aos="fade-left" className="">
        <h1 className="text-2xl">Noah D</h1>
        <p className="text-sm">Testei e amei, recomendo </p>
        <div className="flex gap-2">
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          5/5
        </div>
      </div>
      <div data-aos="fade-right">
        <h1 className="text-2xl">Nicholas P</h1>
        <p className="text-sm">Testei e amei, recomendo</p>
        <div className="flex gap-2">
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          5/5
        </div>
      </div>

      <div data-aos="fade-left">
        <h1 className="text-2xl">Hellen F</h1>
        <p className="text-sm">Testei e amei, recomendo</p>
        <div className="flex gap-2">
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          5/5
        </div>
      </div>

      <div data-aos="fade-right">
        <h1 className="text-2xl">Luke W</h1>
        <p className="text-sm">Testei e amei, recomendo</p>
        <div className="flex gap-2">
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          <StarIcon className="text-yellow-400" size={18} fill="currentColor" />
          5/5
        </div>
      </div>
    </div>
  );
};

export default Depoiments;
