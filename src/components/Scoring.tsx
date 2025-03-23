import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import AnimatedScoreDiagram from "./AnimatedScoreDiagram";

export function Scoring() {
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
          {/* Add the animated scoring diagram */}
          <div className="mt-4">
            <AnimatedScoreDiagram />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
