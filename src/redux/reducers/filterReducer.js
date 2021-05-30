import { types } from "../types";
import data from "../../data.json";

const filterReducer = (state = data.units, action) => {
  switch (action.type) {
    case types.FILTER_ACC_AGE:
      if (action.payload === "All") return [...data.units];
      return [...data.units.filter((unit) => unit.age === action.payload)];

    case types.FILTER_ACC_COST:
      const dataAccToAge = [
        ...data.units.filter((unit) => unit.age === action.payload.age),
      ];
      const onlyValidCosts = Object.entries(action.payload.costs).filter(
        ([key, value]) => value
      );
      if (onlyValidCosts.length < 1) return dataAccToAge;
      const validCostsObj = Object.fromEntries(onlyValidCosts);

      let rawFilteredState = [];
      for (let i = 0; i < dataAccToAge.length; i++) {
        try {
          if (
            validCostsObj.hasOwnProperty("Food") &&
            dataAccToAge[i].cost.hasOwnProperty("Food")
          ) {
            if (dataAccToAge[i].cost.Food <= validCostsObj.Food) {
              rawFilteredState.push(dataAccToAge[i]);
            }
          }
        } catch (e) {
          console.log(e);
        }
        try {
          if (
            validCostsObj.hasOwnProperty("Wood") &&
            dataAccToAge[i].cost.hasOwnProperty("Wood")
          ) {
            if (dataAccToAge[i].cost.Wood <= validCostsObj.Wood) {
              rawFilteredState.push(dataAccToAge[i]);
            }
          }
        } catch (e) {
          console.log(e);
        }
        try {
          if (
            validCostsObj.hasOwnProperty("Gold") &&
            dataAccToAge[i].cost.hasOwnProperty("Gold")
          ) {
            if (dataAccToAge[i].cost.Gold <= validCostsObj.Gold) {
              rawFilteredState.push(dataAccToAge[i]);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
      const uniqueFilteredState = Array.from(new Set(rawFilteredState));

      for (let i = 0; i < uniqueFilteredState.length; i++) {
        try {
          if (uniqueFilteredState[i].cost.Food && validCostsObj.Food) {
            if (uniqueFilteredState[i].cost.Food > validCostsObj.Food) {
              uniqueFilteredState.splice(i, 1);
            }
          }
        } catch (e) {
          console.log(e);
        }
        try {
          if (uniqueFilteredState[i].cost.Wood && validCostsObj.Wood) {
            if (uniqueFilteredState[i].cost.Wood > validCostsObj.Wood) {
              uniqueFilteredState.splice(i, 1);
            }
          }
        } catch (e) {
          console.log(e);
        }
        try {
          if (uniqueFilteredState[i].cost.Gold && validCostsObj.Gold) {
            if (uniqueFilteredState[i].cost.Gold > validCostsObj.Gold) {
              uniqueFilteredState.splice(i, 1);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
      return uniqueFilteredState;
    default:
      return state;
  }
};

export default filterReducer;
