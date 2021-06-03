import filterReducer from "../redux/reducers/filterReducer";
import { types } from "../redux/types";
import data from "../data.json";

test("should return initial state", () => {
  expect(filterReducer(undefined, {})).toEqual(data.units);
});

test("should filter according to age", () => {
  expect(
    filterReducer(data.units, {
      type: types.FILTER_ACC_AGE,
      payload: "Dark",
    })
  ).toEqual(data.units.filter((unit) => unit.age === "Dark"));
});

test("should filter according to cost", () => {
  expect(
    filterReducer(data.units, {
      type: types.FILTER_ACC_COST,
      payload: {
        age: "Feudal",
        costs: {
          Food: 30,
          Wood: null,
          Gold: null,
        },
      },
    })
  ).toEqual(
    data.units.filter((unit) => unit.age === "Feudal" && unit.cost.Food <= 30)
  );
});
