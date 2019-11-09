export const calcReducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { ...state, result: state.result + action.number };
    case "-":
      return { ...state, result: state.result - action.number };
    case "*":
      return { ...state, result: state.result * action.number };
    case "/":
      return { ...state, result: state.result / action.number };
    default:
      return state;
  }
};
