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
