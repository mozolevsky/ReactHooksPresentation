import * as React from "react";
import { render } from "react-dom";
import { Counter } from "./use-state-demo/counter";
import { DataLoader } from "./use-effect-demo/data-loader";
import { ContextDemo } from "./use-context-demo/context-demo";
import { SimpleCalc } from "./use-reducer-demo/calc";
import { Clock } from "./use-callback-demo/clock";
import { Albums } from "./custom-hook-sample/albums-list";
import { Photos } from "./custom-hook-sample/photos-list";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h4>React hooks</h4>
      {/* <Counter /> */}
      {/* <DataLoader /> */}
      {/* <ContextDemo /> */}
      {/* <SimpleCalc /> */}
      {/* <Clock /> */}
      {/* <Albums />
      <Photos /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
