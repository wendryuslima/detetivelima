"use client";
import About from "@/components/about";
import Apresentation from "@/components/apresentation";
import Depoiments from "@/components/depoiments";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Security from "@/components/security";
import Services from "@/components/services";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* <div className="fixed bottom-4 right-4">
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />

        <div className="relative p-2  rounded-full shadow-lg">
          <Link
            target="_blank"
            href="https://wa.me/5511975104376?text=Olá!%20Quero%20mais%20informações"
          >
            <Image
              src="whatsapp-icon.svg"
              alt="WhatsApp"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div> */}

      <Header />
      <Apresentation />
      <About />
      <Hero />
      <Services />
      <Depoiments />
      <FAQ />
      <Security />
      <Footer />
    </>
  );
};

export default Home;
