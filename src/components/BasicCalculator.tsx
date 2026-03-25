import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
  return (
    <section className="grid grid-cols-4 gap-6">
      <Input
        type="number"
        className="col-span-2"
        placeholder="Number 1"
      />
      <Input
        type="number"
        className="col-span-2"
        placeholder="Number 2"
      />

      <Input
        type="number"
        className="col-span-4"
        placeholder="Total"
        disabled
      />

      <Button type="button">Add</Button>
      <Button type="button">Subtract</Button>
      <Button type="button">Multiply</Button>
      <Button type="button">Divide</Button>

      <Button
        type="button"
        variant={"destructive"}
        className="col-span-4">
        Reset
      </Button>
    </section>
  );
};

export default BasicCalculator;
