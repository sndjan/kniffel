import { Card } from "@/components/ui/card";
import { Dices } from "lucide-react";
import { Menu } from "./Menu";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <Card className="m-4 p-4 flex flex-row justify-between items-center">
      <div className="flex flex-row space-x-4">
        <Dices size={32} strokeWidth={2.5} />
        <h1 className="scroll-m-20 sm:text-2xl mb-1 ml-1 font-extrabold tracking-tight lg:text-3xl text-xl">
          Kniffel-Tracker
        </h1>
      </div>
      <div className="flex flex-row space-x-4">
        <Button className="hidden sm:block">Punkteauswertung</Button>
        <ModeToggle />
        <Menu />
      </div>
    </Card>
  );
};

export default Header;
