import { types } from "../types";
import data from "../../data.json";

const agesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ALL_AGES:
      return [...data.units];
    case types.FEUDAL:
      return [...state, ...data.units.filter((unit) => unit.age === "Feudal")];
    case types.DARK:
      return [...state, ...data.units.filter((unit) => unit.age === "Dark")];
    case types.IMPERIAL:
      return [
        ...state,
        ...data.units.filter((unit) => unit.age === "Imperial"),
      ];
    case types.CASTLE:
      return [...state, ...data.units.filter((unit) => unit.age === "Castle")];
    case types.REMOVE_AGE:
      if (action.age === "All") return [];
      return [...state.filter((unit) => unit.age !== action.age)];
    default:
      return state;
  }
};

export default agesReducer;
