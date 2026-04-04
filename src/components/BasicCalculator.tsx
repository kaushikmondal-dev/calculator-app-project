"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState("");

  const handleAdd = () => {
    if (number1 !== "" && number2 !== "") {
      const result = parseInt(number1) + parseInt(number2);
      setTotal(result.toString());
    }
    setNumber1("");
    setNumber2("");
  };

  const handleSubtract = () => {
    if (number1 !== "" && number2 !== "") {
      const result = parseInt(number1) - parseInt(number2);
      setTotal(result.toString());
    }
    setNumber1("");
    setNumber2("");
  };

  const handleMultiply = () => {
    if (number1 !== "" && number2 !== "") {
      const result = parseInt(number1) * parseInt(number2);
      setTotal(result.toString());
    }
    setNumber1("");
    setNumber2("");
  };

  const handleDivide = () => {
    if (number1 !== "" && number2 !== "") {
      const result = parseInt(number1) / parseInt(number2);
      setTotal(result.toString());
    }
    setNumber1("");
    setNumber2("");
  };

  const handleReset = () => {
    setNumber1("");
    setNumber2("");
    setTotal("");
  };

  return (
    <section className="grid grid-cols-4 gap-6">
      <Input
        type="number"
        className="col-span-2"
        placeholder="Number 1"
        onChange={(e) => setNumber1(e.target.value)}
        value={number1}
      />
      <Input
        type="number"
        className="col-span-2"
        placeholder="Number 2"
        onChange={(e) => setNumber2(e.target.value)}
        value={number2}
      />

      <Input
        type="number"
        className="col-span-4"
        placeholder="Total"
        disabled
        value={total}
      />

      <Button
        type="button"
        size={"lg"}
        onClick={handleAdd}
        disabled={number1 === "" || number2 === ""}>
        Add
      </Button>

      <Button
        type="button"
        size={"lg"}
        onClick={handleSubtract}
        disabled={number1 === "" || number2 === ""}>
        Subtract
      </Button>

      <Button
        type="button"
        size={"lg"}
        onClick={handleMultiply}
        disabled={number1 === "" || number2 === ""}>
        Multiply
      </Button>

      <Button
        type="button"
        size={"lg"}
        onClick={handleDivide}
        disabled={number1 === "" || number2 === ""}>
        Divide
      </Button>

      <Button
        type="button"
        variant={"destructive"}
        className="col-span-4"
        onClick={handleReset}
        disabled={(number1 === "" || number2 === "") && total === ""}>
        Reset
      </Button>
    </section>
  );
};

export default BasicCalculator;
