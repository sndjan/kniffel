import { EllipsisVertical, RotateCcw, Trash2, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuProps {
  resetAll: () => void;
  resetAllPoints: () => void;
}

export function Menu({ resetAll, resetAllPoints }: MenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Optionen</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={resetAllPoints}>
            <RotateCcw />
            <span>Werte zurücksetzen</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={resetAll}>
            <Trash2 />
            <span>Alles zurücksetzen</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trophy />
            <span>Punkteauswertung</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
