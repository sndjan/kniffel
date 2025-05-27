import AnimatedScoreDiagram from "./AnimatedScoreDiagram";
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
}

export function Scoring({ players, open, onOpenChange }: ScoringProps) {
  return (
    <div className="hidden sm:block">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Punkteauswertung</DialogTitle>
          </DialogHeader>
          <DialogDescription>Siehe wer gewonnen hat</DialogDescription>
          <div className="mt-4">
            <AnimatedScoreDiagram players={players} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
