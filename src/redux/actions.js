import { types } from "./types";
// for filterReducer
export const filterAccAge = (payload) => {
  return {
    type: types.FILTER_ACC_AGE,
    payload: payload,
  };
};

export const filterAccCost = (payload) => {
  return {
    type: types.FILTER_ACC_COST,
    payload: payload,
  };
};

export const updateAge = (payload) => {
  return {
    type: types.AGES_WATCHER,
    payload: payload,
  };
};

export const updateCost = (costType, costValue) => {
  return {
    type: types.COSTS_WATCHER,
    costType,
    costValue,
  };
};
//for optionsReducer
export const updateAgeOptions = (payload) => {
  return {
    type: types.UPDATE_AGE_OPTIONS,
    payload: payload,
  };
};

export const updateCostOptions = (costType, costValue) => {
  return {
    type: types.UPDATE_COST_OPTIONS,
    costType,
    costValue,
  };
};
