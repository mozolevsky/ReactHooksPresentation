import React, { useReducer, useState } from "react";
import { calcReducer } from "./reducer";

const button = {
  section: {
    margin: "1rem"
  },
  btn: {
    marginLeft: "0.5rem",
    width: "35px",
    height: "35px",
    background: "#face88"
  }
};

export const SimpleCalc = props => {
  const [input, changeInput] = useState(null);
  const [state, dispatch] = useReducer(calcReducer, { result: 0 });

  const handleInputChange = e => changeInput(Number(e.target.value));
  const handleBtnClick = e => dispatch({ ...e.target.dataset, input });

  return (
    <div>
      <p>Total: {Math.round(state.result)}</p>
      <input type="text" value={input} onChange={handleInputChange} />
      <section style={button.section} onClick={handleBtnClick}>
        {["+", "-", "*", "/"].map((v, idx) => (
          <button data-type={v} key={idx} style={button.btn}>
            {v}
          </button>
        ))}
      </section>
    </div>
  );
};
