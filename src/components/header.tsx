import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    event.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  return (
    <div className="flex w-full justify-between border-b border-solid items-center  py-6 px-4">
      <div className="flex flex-col">
        <div className="flex">
          <h1 className="tracking-[7px]">
            DETETIVE <span className="text-destructive">LIMA</span>
          </h1>
        </div>
        <p className="bg-white rounded-sm text-black px-1  text-xs">
          Serviços de detetive particular
        </p>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <MenuIcon size={22} />
        </SheetTrigger>
        <SheetContent className="gap-4 space-y-7 border-l">
          <SheetHeader className="gap-6">
            <a
              href="#about"
              className="text-destructive header-link"
              onClick={(e) => handleLinkClick(e, "#about")}
            >
              Sobre nós
            </a>
            <a
              href="#services"
              className="header-link"
              onClick={(e) => handleLinkClick(e, "#services")}
            >
              Serviços
            </a>
            <a
              href="#depoiments"
              className="header-link"
              onClick={(e) => handleLinkClick(e, "#depoiments")}
            >
              Depoimentos
            </a>
            <a
              href="#FAQ"
              className="text-destructive header-link"
              onClick={(e) => handleLinkClick(e, "#FAQ")}
            >
              FAQ
            </a>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
