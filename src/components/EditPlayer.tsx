import {
  ArrowBigLeft,
  ArrowBigRight,
  EllipsisVertical,
  RotateCcw,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface EditPlayerProps {
  resetPoints: () => void;
  removePlayer: () => void;
  changeName: () => void;
  moveToRight: () => void;
  moveToLeft: () => void;
}

export function EditPlayer({
  resetPoints,
  removePlayer,
  changeName,
  moveToRight,
  moveToLeft,
}: EditPlayerProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Optionen</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem onSelect={changeName}>
            <Pencil />
            <span>Name bearbeiten</span>
          </DropdownMenuItem> */}
          <DropdownMenuItem onSelect={resetPoints}>
            <RotateCcw />
            <span>Werte zurücksetzen</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={moveToLeft}>
            <ArrowBigLeft size={16} />
            <span>Nach links verschieben</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={moveToRight}>
            <ArrowBigRight size={16} />
            <span>Nach rechts verschieben</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={removePlayer}>
            <Trash2 />
            <span>Spieler löschen</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
