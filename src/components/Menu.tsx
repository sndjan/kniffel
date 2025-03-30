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
import { Scoring } from "./Scoring";
import { Player } from "./hooks/types";

interface MenuProps {
  players: Player[];
  resetAll: () => void;
  resetAllPoints: () => void;
}

export function Menu({ players, resetAll, resetAllPoints }: MenuProps) {
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
          <DropdownMenuItem onClick={(e) => e.preventDefault()}>
            <Trophy />
            <Scoring players={players} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
