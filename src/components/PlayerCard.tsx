import { Card } from "@/components/ui/card";
import { EditPlayer } from "./EditPlayer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
interface PlayerCardProps {
  name: string;
  points: number;
  updatePoints: (points: number) => void;
  resetPoints: () => void;
  removePlayer: () => void;
  changeName: (name: string) => void;
  moveToRight: () => void;
  moveToLeft: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  points,
  updatePoints,
  resetPoints,
  removePlayer,
  changeName,
  moveToRight,
  moveToLeft,
}) => {
  return (
    <Card className="mx-4 p-4 flex flex-col justify-between items-center space-y-[-15px]">
      <div className="flex flex-row justify-between w-full items-center mb-1">
        <div>{name}</div>
        <EditPlayer
          resetPoints={resetPoints}
          removePlayer={removePlayer}
          changeName={changeName}
          moveToRight={moveToRight}
          moveToLeft={moveToLeft}
        />
      </div>
      {Array.from({ length: 6 }, (_, j) => (
        <Select key={j}>
          <SelectTrigger className="w-full h-2">
            <div className="flex w-full items-center">
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key="X" value="X">
                X
              </SelectItem>
              {["Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs"].map((key) => (
                <SelectItem key={key} value={key}>
                  {key}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
      <div className="my-3">0</div>
      {Array.from({ length: 7 }, (_, j) => (
        <Select key={j}>
          <SelectTrigger className="w-full h-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key="X" value="X">
                X
              </SelectItem>
              {Array.from({ length: 31 }, (_, i) => (
                <SelectItem key={i} value={i.toString()}>
                  {i}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </Card>
  );
};

export default PlayerCard;
