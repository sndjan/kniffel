import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { EditPlayer } from "./EditPlayer";

const PlayerCard = ({ name }: { name: string }) => {
  return (
    <Card className="mx-4 p-4 flex flex-col justify-between items-center space-y-[-15px]">
      <div className="flex flex-row justify-between w-full items-center mb-1">
        <div>{name}</div>
        <EditPlayer></EditPlayer>
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
              {Array.from({ length: 31 }, (_, i) => (
                <SelectItem key={i} value={i.toString()}>
                  {i}
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
