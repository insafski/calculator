import { useState } from "react";

import { Calculator } from "./api";
import {
    ActionButtons,
    NumberButtons,
    Display,
    Equal
} from "./components/DisplayElements";

import './App.css';

function App() {
    const calculator = new Calculator();

    const [result, setResult] = useState(0);
    const [calculateString, setCalculateString] = useState("");

    function setNumber(number) {
        setCalculateString(String(calculateString)+String(number));
    }

    function setAction(action) {
        if(/[+\-*\/]/.test(calculateString.slice(-1))) {
            setCalculateString(String(calculateString.replace(/[+\-*\/]$/,action)));
        } else {
            setCalculateString(String(calculateString)+String(action));
        }
    }

    function reset() {
        setCalculateString("");
    }

    function calculate() {
      const result = calculator.calculate(calculateString);

      setResult(result);
    }

    return (
      <div className={"base-wrapper"}>
          <Display value={calculateString} />
          <Display value={result} />
          <div
              style={{
                  display: "flex",
                  alignContent: "space-between"
              }}
          >
              <NumberButtons setNumber={setNumber} />
              <ActionButtons setAction={setAction} reset={reset} />
              <Equal calculate={calculate}/>
          </div>
      </div>
    )
}

export default App;
