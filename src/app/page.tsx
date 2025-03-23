import About from "@/components/about";
import Apresentation from "@/components/apresentation";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="fixed bottom-0 p-4 right-0">
        <Image src="whatsapp-icon.svg" alt="whats" width={40} height={40} />
      </div>

      <Header />
      <Apresentation />
      <About />
      <Hero />
      <Services/>
    </>
  );
};

export default Home;
