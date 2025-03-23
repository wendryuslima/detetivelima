import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <div className="flex w-full justify-between border-b border-solid items-center  py-4 px-4">
      <div className="flex flex-col">
        <h1 className="tracking-[7px]">
          DETETIVE <span className="text-destructive">LIMA</span>
        </h1>
        <p className="bg-white text-black px-1  text-sm">
          Serviços de detetive particular
        </p>
      </div>

      <Sheet>
        <SheetTrigger>
          <MenuIcon size={22} />
        </SheetTrigger>
        <SheetContent className="gap-4 space-y-7 border-l">
          <SheetHeader className="gap-6">
            <a>Sobre nós</a>
            <a>Serviços</a>
            <a>Contato</a>
            <a>Recomendações</a>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
