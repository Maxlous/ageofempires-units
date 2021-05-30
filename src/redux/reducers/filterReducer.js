import { types } from "../types";
import data from "../../data.json";

const filterReducer = (state = data.units, action) => {
  switch (action.type) {
    case types.FILTER_ACC_AGE:
      if (action.payload === "All") return [...data.units];
      return [...data.units.filter((unit) => unit.age === action.payload)];

    case types.FILTER_ACC_COST:
      let dataAccToAge = [];
      if (action.payload.age === "All") {
        dataAccToAge = [...data.units];
      } else {
        dataAccToAge = [
          ...data.units.filter((unit) => unit.age === action.payload.age),
        ];
      }
      const onlyValidCosts = Object.entries(action.payload.costs).filter(
        ([key, value]) => value
      );
      if (onlyValidCosts.length < 1) return dataAccToAge;
      const validCostsObj = Object.fromEntries(onlyValidCosts);
      // add units who pass at least one criteria
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
      // remove duplicates
      const uniqueRawFilteredState = Array.from(new Set(rawFilteredState));
      //remove the ones who are not able to pass the criteria
      for (let i = uniqueRawFilteredState.length - 1; i >= 0; i--) {
        try {
          if (uniqueRawFilteredState[i].cost.Food && validCostsObj.Food) {
            if (uniqueRawFilteredState[i].cost.Food > validCostsObj.Food) {
              uniqueRawFilteredState.splice(i, 1);
              continue;
            }
          }
        } catch (e) {
          console.log(e);
        }
        try {
          if (uniqueRawFilteredState[i].cost.Wood && validCostsObj.Wood) {
            if (uniqueRawFilteredState[i].cost.Wood > validCostsObj.Wood) {
              uniqueRawFilteredState.splice(i, 1);
              continue;
            }
          }
        } catch (e) {
          console.log(e);
        }
        try {
          if (uniqueRawFilteredState[i].cost.Gold && validCostsObj.Gold) {
            if (uniqueRawFilteredState[i].cost.Gold > validCostsObj.Gold) {
              uniqueRawFilteredState.splice(i, 1);
              continue;
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
      return uniqueRawFilteredState;
    default:
      return state;
  }
};

export default filterReducer;
