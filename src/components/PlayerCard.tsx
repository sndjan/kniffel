import { Card } from "@/components/ui/card";
import { EditPlayer } from "./EditPlayer";
import pointsJson from "../../public/points.json";
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
  points: Record<string, number>;
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
      {["Einser", "Zweier", "Dreier", "Vierer", "Fünfer", "Sechser"].map(
        (key, index) => (
          <Select
            key={index}
            onValueChange={(value) => {
              const numericValue = value === "X" ? 0 : parseInt(value, 10);
              updatePoints(numericValue); // Update the points for this category
            }}
          >
            <SelectTrigger className="w-full h-2">
              <div className="flex w-full items-center">
                {/* Use the player's current points for this category as the placeholder */}
                <SelectValue placeholder={points[key] || key} />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem key="X" value="X">
                  X
                </SelectItem>
                {pointsJson[key as keyof typeof pointsJson].map(
                  (value: number, idx: number) => (
                    <SelectItem key={idx} value={value.toString()}>
                      {value}
                    </SelectItem>
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        )
      )}
      <div className="my-3">0</div>
      {[
        "Dreierpasch",
        "Viererpasch",
        "Full House",
        "Kleine Straße",
        "Große Straße",
        "Kniffel",
        "Chance",
      ].map((key, index) => (
        <Select
          key={index}
          onValueChange={(value) => {
            const numericValue = value === "X" ? 0 : parseInt(value, 10);
            updatePoints(numericValue); // Update the points for this category
          }}
        >
          <SelectTrigger className="w-full h-2">
            <div className="flex w-full items-center">
              {/* Use the player's current points for this category as the placeholder */}
              <SelectValue placeholder={points[key] || key} />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem key="X" value="X">
                X
              </SelectItem>
              {pointsJson[key as keyof typeof pointsJson].map(
                (value: number, idx: number) => (
                  <SelectItem key={idx} value={value.toString()}>
                    {value}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </Card>
  );
};

export default PlayerCard;
