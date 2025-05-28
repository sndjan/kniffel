import AnimatedScoreDiagram from "./AnimatedScoreDiagram";
import { gamemodes } from "./gamemodes/gamemodes";
import { Player } from "./hooks/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface ScoringProps {
  players: Player[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  gamemode: keyof typeof gamemodes;
}

export function Scoring({
  players,
  open,
  onOpenChange,
  gamemode,
}: ScoringProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Punkteauswertung</DialogTitle>
        </DialogHeader>
        <DialogDescription>Siehe wer gewonnen hat</DialogDescription>
        <div className="mt-4">
          <AnimatedScoreDiagram players={players} gamemode={gamemode} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
