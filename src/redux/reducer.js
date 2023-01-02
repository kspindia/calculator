import * as actionType from "./actionTypes";

export const CALCULATOR_KEY = "calculatorStore";

const initialState = {
  number: "",
  ans: "",
};

export const calculatorReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actionType.LOAD_BUTTONS:
      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload),
      };
    case actionType.LOAD_ANSWER:
      try {
        return {
          ...state,
          ...payload,
          ans: eval(state.number).toString(),
        };
      } catch (error) {
        return {
          ...state,
          ...payload,
          ans: "Error",
        };
      }
    case actionType.LOAD_CLEAR:
      return {
        ...state,
        ...payload,
        number: "",
        ans: "",
      };
    case actionType.LOAD_BACKSPACE:
      return {
        ...state,
        ...payload,
        number: state.number.slice(0, -1),
        ans: "",
      };

    default:
      return state;
  }
};
