"use client";

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
import {
  EllipsisVertical,
  Moon,
  RotateCcw,
  Sun,
  Trash2,
  Trophy,
  UserRound,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Player } from "./hooks/types";
import { Scoring } from "./Scoring";

const PROFILE_ACTIVE = process.env.NEXT_PUBLIC_PROFILE_ACTIVE === "true";

interface MenuProps {
  players?: Player[];
  resetAll?: () => void;
  resetAllPoints?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  gamemode?: string;
}

export function Menu({
  players,
  resetAll,
  resetAllPoints,
  open,
  onOpenChange,
  gamemode,
}: MenuProps) {
  const { theme, setTheme } = useTheme();

  return (
    <>
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
            {resetAllPoints && (
              <DropdownMenuItem onSelect={resetAllPoints}>
                <RotateCcw />
                <span>Werte zurücksetzen</span>
              </DropdownMenuItem>
            )}
            {resetAll && (
              <DropdownMenuItem onSelect={resetAll}>
                <Trash2 />
                <span>Alles zurücksetzen</span>
              </DropdownMenuItem>
            )}
            {onOpenChange && (
              <DropdownMenuItem onSelect={() => onOpenChange(true)}>
                <Trophy />
                <span>Punkteauswertung</span>
              </DropdownMenuItem>
            )}
            {PROFILE_ACTIVE && (
              <DropdownMenuItem asChild>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 w-full"
                >
                  <UserRound />
                  <span>Profil</span>
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onSelect={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-[1.2rem] w-[1.2rem] transition-all scale-100" />
                  <span>Dunkler Modus</span>
                </>
              ) : (
                <>
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span>Heller Modus</span>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {gamemode && players && open && onOpenChange && (
        <Scoring
          players={players}
          open={open}
          onOpenChange={onOpenChange}
          gamemode={gamemode}
        />
      )}
    </>
  );
}
