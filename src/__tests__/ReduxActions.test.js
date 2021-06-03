import * as actions from "../redux/actions";
import { types } from "../redux/types";

describe("filter reducer actions", () => {
  test("should create an action to filter according to age", () => {
    const payload = "Feudal";
    const expectedAction = {
      type: types.FILTER_ACC_AGE,
      payload,
    };
    expect(actions.filterAccAge(payload)).toEqual(expectedAction);
  });

  test("should create an action to filter according to cost", () => {
    const payload = {
      age: "All",
      costs: {
        Food: null,
        Wood: null,
        Gold: null,
      },
    };
    const expectedAction = {
      type: types.FILTER_ACC_COST,
      payload,
    };
    expect(actions.filterAccCost(payload)).toEqual(expectedAction);
  });

  test("should create an action to update cost", () => {
    const costType = "Wood";
    const costValue = 50;
    const expectedAction = {
      type: types.COSTS_WATCHER,
      costType,
      costValue,
    };
    expect(actions.updateCost(costType, costValue)).toEqual(expectedAction);
  });

  test("should create an action to update age", () => {
    const payload = "Imperial";
    const expectedAction = {
      type: types.AGES_WATCHER,
      payload,
    };
    expect(actions.updateAge(payload)).toEqual(expectedAction);
  });
});

describe("options reducer actions", () => {
  test("should create an action to update age options", () => {
    const payload = "Imperial";
    const expectedAction = {
      type: types.UPDATE_AGE_OPTIONS,
      payload,
    };
    expect(actions.updateAgeOptions(payload)).toEqual(expectedAction);
  });

  test("should create an action to update cost options", () => {
    const costType = "Food";
    const costValue = 25;
    const expectedAction = {
      type: types.UPDATE_COST_OPTIONS,
      costType,
      costValue,
    };
    expect(actions.updateCostOptions(costType, costValue)).toEqual(
      expectedAction
    );
  });
});
