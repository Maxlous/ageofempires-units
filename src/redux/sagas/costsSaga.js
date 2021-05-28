import { takeEvery, put } from "redux-saga/effects";
import { types } from "../types";
import { foodCost, goldCost, woodCost, removeCost } from "../actions";

function* asyncUpdateCosts(action) {
  if (action.payload === "Wood") yield put(woodCost(action.cost));
  if (action.payload === "Gold") yield put(goldCost(action.cost));
  if (action.payload === "Food") yield put(foodCost(action.cost));
}

function* asyncRemoveCosts(action) {
  if (action.payload === "Remove") yield put(removeCost(action.cost));
}

export function* watchCostsSaga() {
  yield takeEvery(types.FILTER_FOR_COST, asyncUpdateCosts);
  yield takeEvery(types.REMOVE_COST, asyncRemoveCosts);
}
