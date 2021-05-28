import { types } from "../types";
import data from "../../data.json";

const costReducer = (state = [], action) => {
  switch (action.type) {
    case types.FOOD_COST:
      return [
        ...state,
        ...data.units.filter((unit) => {
          try {
            return unit.cost.Food <= action.cost;
          } catch (e) {
            console.log(e);
          }
        }),
      ];
    case types.GOLD_COST:
      return [
        ...state,
        ...data.units.filter((unit) => {
          try {
            return unit.cost.Gold <= action.cost;
          } catch (e) {
            console.log(e);
          }
        }),
      ];
    case types.WOOD_COST:
      return [
        ...state,
        ...data.units.filter((unit) => {
          try {
            return unit.cost.Wood <= action.cost;
          } catch (e) {
            console.log(e);
          }
        }),
      ];
    case types.REMOVE_COST:
      return [
        ...state.filter((unit) => {
          if (action.payload in unit.cost === false) return unit;
        }),
      ];
    default:
      return state;
  }
};

export default costReducer;
