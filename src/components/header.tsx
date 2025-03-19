import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex bg-[#18181b] items-center px-5 py-5">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col mt-0 mb-0">
          {" "}
          <h1 className="text-2xl text-white">PRIME</h1>
          <h1 className="text-2xl text-white">BIOME </h1>
        </div>

        <Sheet>
          <SheetTrigger>
            <MenuIcon className="text-white" size={22} />
          </SheetTrigger>
          <SheetContent>
            <div className="gap-4 flex flex-col mb-6 p-5">
              <a href="">Ingredients</a>
              <a href="">FREE Bonuses</a>
              <a href="">FAQ</a>
              <Button className="bg-[#00baf0] text-w">Order Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
