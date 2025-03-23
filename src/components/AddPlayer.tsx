import { UserRoundPlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function CategoryIcons() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <UserRoundPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Spieler hinzufügen</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Gebe einen Namen für einen neuen Spieler ein:
        </DialogDescription>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="username" className="text-right col-span-1">
            Name
          </label>
          <Input id="username" className="col-span-3" />
        </div>
        <DialogFooter>
          <Button type="submit">Hinzufügen</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CategoryIcons;
