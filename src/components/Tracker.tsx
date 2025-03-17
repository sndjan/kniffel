import { Card } from "@/components/ui/card";
import CategoryIcons from "./CategoryIcons";

const Tracker = () => {
  return (
    <div className="flex flex-row">
      <CategoryIcons />
      <Card className="p-4 flex flex-row justify-between items-center"></Card>
    </div>
  );
};

export default Tracker;
