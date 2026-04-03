import { DivideIcon, MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./shadcnui/select";

const AdvancedCalculator = () => {
  return (
    <section className="grid grid-cols-3 gap-6">
      <Input
        type="number"
        className="col-span-1"
        placeholder="1"
      />

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Operator" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="+">
            <PlusIcon />
          </SelectItem>
          <SelectItem value="-">
            <MinusIcon />
          </SelectItem>

          <SelectItem value="x">
            <XIcon />
          </SelectItem>

          <SelectItem value="/">
            <DivideIcon />
          </SelectItem>
        </SelectContent>
      </Select>

      <Input
        type="number"
        className="col-span-1"
        placeholder="2"
      />

      <Input
        type="number"
        className="col-span-2"
        placeholder="Total"
        disabled
      />
      <Button
        type="button"
        className="col-span-1">
        Calculate
      </Button>

      <Button
        type="button"
        variant={"destructive"}
        className={"col-span-3"}>
        Reset
      </Button>
    </section>
  );
};

export default AdvancedCalculator;
