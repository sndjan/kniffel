import { Button } from "@/components/ui/button";
import AnimatedScoreDiagram from "./AnimatedScoreDiagram";
import { Player } from "./hooks/useKniffel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ScoringProps {
  players: Player[];
}

export function Scoring({ players }: ScoringProps) {
  return (
    <div className="hidden sm:block">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Punkteauswertung</Button>
        </DialogTrigger>
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
