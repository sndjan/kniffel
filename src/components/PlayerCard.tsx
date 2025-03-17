import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const PlayerCard = ({ name }: { name: string }) => {
  return (
    <Card className="mx-4 p-4 flex flex-col justify-between items-center space-y-[-15px]">
      <h2 className="mb-1">{name}</h2>
      {Array.from({ length: 6 }, (_, j) => (
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
