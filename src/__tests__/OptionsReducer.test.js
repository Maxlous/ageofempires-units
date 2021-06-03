import optionsReducer from "../redux/reducers/optionsReducer";
import { INITIAL_STATE } from "../redux/reducers/optionsReducer";
import { types } from "../redux/types";

test("should return initial state", () => {
  expect(optionsReducer(undefined, {})).toEqual(INITIAL_STATE);
});

test("should update age options", () => {
  expect(
    optionsReducer(
      {},
      {
        type: types.UPDATE_AGE_OPTIONS,
        payload: "Imperial",
      }
    )
  ).toEqual({
    age: "Imperial",
  });
});

test("should update cost options", () => {
  expect(
    optionsReducer(
      {
        age: "Feudal",
        costs: {
          Food: 15,
          Wood: null,
          Gold: null,
        },
      },
      {
        type: types.UPDATE_COST_OPTIONS,
        costType: "Wood",
        costValue: 30,
      }
    )
  ).toEqual({
    age: "Feudal",
    costs: {
      Food: 15,
      Wood: 30,
      Gold: null,
    },
  });
});
