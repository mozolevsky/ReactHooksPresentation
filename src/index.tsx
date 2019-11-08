import * as React from "react";
import { render } from "react-dom";
import { Counter } from "./use-state-demo/counter";
import { DataLoader } from "./use-effect-demo/data-loader";
import { TopLevelWrapper as ContextSample } from "./use-context-demo/top-level-wrapper";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <DataLoader />
      {/* <ContextSample /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
