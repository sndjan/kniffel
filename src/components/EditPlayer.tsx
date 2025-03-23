import {
  ArrowBigLeft,
  ArrowBigRight,
  EllipsisVertical,
  Pencil,
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

export function EditPlayer() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Optionen</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Pencil />
            <span>Name bearbeiten</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RotateCcw />
            <span>Werte zurücksetzen</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowBigLeft size={16} />
            <span>Nach links verschieben</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArrowBigRight size={16} />
            <span>Nach rechts verschieben</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash2 />
            <span>Spieler löschen</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
