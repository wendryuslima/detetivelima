import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <div className="flex justify-between border-b border-solid items-center  py-4 px-4">
      <div>
        <h1 className="tracking-[7px]">
          DETETIVE <span className="text-destructive">LIMA</span>
        </h1>
      </div>

      <Sheet>
        <SheetTrigger>
          <MenuIcon size={18} />
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
