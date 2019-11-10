export const calcReducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { ...state, result: state.result + action.input };
    case "-":
      return { ...state, result: state.result - action.input };
    case "*":
      return { ...state, result: state.result * action.input };
    case "/":
      return { ...state, result: state.result / action.input };
    default:
      return state;
  }
};
