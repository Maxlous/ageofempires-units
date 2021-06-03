import { types } from "../types";

export const INITIAL_STATE = {
  age: "All",
  costs: {
    Food: null,
    Wood: null,
    Gold: null,
  },
};

const optionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_AGE_OPTIONS:
      return { ...state, age: action.payload };
    case types.UPDATE_COST_OPTIONS:
      const { costType, costValue } = action;
      return { ...state, costs: { ...state.costs, [costType]: costValue } };
    default:
      return state;
  }
};

export default optionsReducer;
