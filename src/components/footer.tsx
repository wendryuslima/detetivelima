import { InstagramIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-4 px-4 text-white">
      <Link href="https://www.instagram.com/detetiveparticularlima?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <InstagramIcon />
      </Link>
      <p className="text-zinc-400">detetivemulherlima@outlook.com</p>
      <p className="text-sm">© 2025 Todos os direiros reservados</p>
    </div>
  );
};

export default Footer;
