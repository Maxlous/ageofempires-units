import { types } from "./types";

export const filterAccordingToAge = (payload) => {
  return {
    type: types.FILTER_FOR_AGE,
    payload: payload,
  };
};

export const feudalAge = () => {
  return {
    type: types.FEUDAL,
  };
};

export const castleAge = () => {
  return {
    type: types.CASTLE,
  };
};

export const darkAge = () => {
  return {
    type: types.DARK,
  };
};

export const imperialAge = () => {
  return {
    type: types.IMPERIAL,
  };
};

export const removeAge = (payload, age) => {
  return {
    type: types.REMOVE_AGE,
    payload: payload,
    age: age,
  };
};

export const allAges = () => {
  return {
    type: types.ALL_AGES,
  };
};

export const filterAccordingToCost = (payload, cost) => {
  return {
    type: types.FILTER_FOR_COST,
    payload: payload,
    cost: cost,
  };
};

export const foodCost = (cost) => {
  return {
    type: types.FOOD_COST,
    cost: cost,
  };
};

export const goldCost = (cost) => {
  return {
    type: types.GOLD_COST,
    cost: cost,
  };
};

export const woodCost = (cost) => {
  return {
    type: types.WOOD_COST,
    cost: cost,
  };
};

export const removeCost = (payload, cost) => {
  return {
    type: types.REMOVE_COST,
    payload: payload,
    cost: cost,
  };
};
