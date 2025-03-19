import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className=" bg-[#007953]  px-5 py-3">
      <div className="flex  w-full items-end  justify-end gap-4">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="text-white" size={22} />
          </SheetTrigger>
          <SheetContent>
            <div className="gap-4 flex flex-col mb-6 p-5">
              <a href="">Ingredients</a>
              <a href="">FREE Bonuses</a>
              <a href="">FAQ</a>
              <Button className="bg-[#00baf0] w-28 text-b">Order Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
