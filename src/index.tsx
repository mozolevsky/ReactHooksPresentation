import * as React from "react";
import { render } from "react-dom";
import { Counter } from "./use-state-demo/counter";
import { DataLoader } from "./use-effect-demo/data-loader";
import { ContextDemo } from "./use-context-demo/context-demo";
import { SimpleCalc } from "./use-reducer-demo/calc";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <DataLoader /> */}
      {/* <ContextDemo /> */}
      <SimpleCalc />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
