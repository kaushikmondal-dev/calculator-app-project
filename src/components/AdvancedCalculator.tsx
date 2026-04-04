"use client";

import { DivideIcon, MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
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
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setoperator] = useState("");
  const [total, setTotal] = useState("");

  const handleCalculate = () => {
    if (number1 !== "" && number2 !== "" && operator !== "") {
      const num1 = parseInt(number1);
      const num2 = parseInt(number2);

      switch (operator) {
        case "+":
          setTotal((num1 + num2).toString());
          break;

        case "-":
          setTotal((num1 - num2).toString());
          break;

        case "x":
          setTotal((num1 * num2).toString());
          break;

        case "/":
          setTotal((num1 / num2).toString());
          break;
      }
      setNumber1("");
      setNumber2("");
      setoperator("");
    }
  };
  const handleReset = () => {
    setTotal("");
  };

  return (
    <section className="grid grid-cols-3 gap-6">
      <Input
        type="number"
        className="col-span-1"
        placeholder="Number 1"
        onChange={(e) => setNumber1(e.target.value)}
        value={number1}
      />

      <Select
        onValueChange={(opValue) => setoperator(opValue ?? "")}
        value={operator}>
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
        placeholder="Number 2"
        onChange={(e) => setNumber2(e.target.value)}
        value={number2}
      />

      <Input
        type="number"
        className="col-span-2"
        placeholder="Total"
        disabled
        value={total}
      />
      <Button
        type="button"
        className="col-span-1"
        onClick={handleCalculate}
        disabled={number1 === "" || number2 === "" || operator === ""}>
        Calculate
      </Button>

      <Button
        type="button"
        variant={"destructive"}
        className={"col-span-3"}
        onClick={handleReset}
        disabled={(number1 === "" || number2 === "") && total === ""}>
        Reset
      </Button>
    </section>
  );
};

export default AdvancedCalculator;
