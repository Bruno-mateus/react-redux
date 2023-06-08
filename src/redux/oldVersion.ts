//inicio de fluxo, criacao do store com o estate e reducer

import { createStore } from "redux";


//começãmos com o estado inicial
const initialState = {
    counter: {
        value:0
    }
}

function reducer(state = initialState, action:any) {
    switch (action.type) {
      case "counter/increment":
        return {
          ...state,
          counter: {
            value: state.counter.value + 1,
          },
        };
      case "counter/incrementAmount":
        return {
          ...state,
          counter: {
            value: state.counter.value + action.payload,
          },
        };
      case "counter/decrease":
        return {
          ...state,
          counter: {
            value: state.counter.value - 1,
          },
        };
      case "counter/decreaseAmount":
        return {
          ...state,
          counter: {
            value: state.counter.value - action.payload,
          },
        };

      default:
        return state;
    }
}

export const store = createStore(reducer)