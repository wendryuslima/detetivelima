import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <div className="flex w-full justify-between border-b border-solid items-center  py-4 px-4">
      <div className="flex flex-col">
        <h1 className="tracking-[7px]">
          DETETIVE <span className="text-destructive">LIMA</span>
        </h1>
        <p className="bg-white rounded-sm text-black px-1 text-xs">
          Serviços de detetive particular
        </p>
      </div>

      <Sheet>
        <SheetTrigger>
          <MenuIcon size={22} />
        </SheetTrigger>
        <SheetContent className="gap-4 space-y-7 border-l">
          <SheetHeader className="gap-6">
            <a className="text-destructive">Sobre nós</a>
            <a>Serviços</a>
            <a className="">Depoimentos</a>
            <a className="text-destructive">FAQ</a>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
