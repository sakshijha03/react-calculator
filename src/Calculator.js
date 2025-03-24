import React, { useState } from "react";
import "./App.css"; // Importing styles

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => {
    setInput("0");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const squareNumber = () => {
    setInput((parseFloat(input) ** 2).toString());
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"].map((char) => (
          <button
            key={char}
            className={["+", "-", "*", "/"].includes(char) ? "operator" : "number"}
            onClick={() => (char === "=" ? calculateResult() : handleClick(char.toString()))}
          >
            {char}
          </button>
        ))}
        <button className="operator" onClick={squareNumber}>x²</button>
        <button className="clear" onClick={clearInput}>AC</button>
      </div>
    </div>
  );
};

export default Calculator;
