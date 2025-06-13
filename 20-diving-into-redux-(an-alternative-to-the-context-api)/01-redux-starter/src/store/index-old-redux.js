// "redux": "^5.0.1",

import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    // case "increaseBy5":
    //   return { counter: state.counter + 5 };
    case "increase":
      return {
        ...state,
        counter: state.counter + action.amount,
      };

    case "toggle":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
