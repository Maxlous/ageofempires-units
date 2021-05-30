import { takeEvery, takeLatest, put, select, delay } from "redux-saga/effects";
import { types } from "../types";
import {
  filterAccAge,
  filterAccCost,
  updateAgeOptions,
  updateCostOptions,
} from "../actions";

function* asyncUpdateAges(action) {
  yield put(updateAgeOptions(action.payload));
  const getAgeOptions = (state) => state.optionsReducer.age;
  const ageData = yield select(getAgeOptions);
  yield put(filterAccAge(ageData));
}

function* asyncUpdateCosts(action) {
  // wait for little to take last call from ranger changes to update state
  yield delay(200);
  yield put(updateCostOptions(action.costType, action.costValue));
  const getOptions = (state) => state.optionsReducer;
  const options = yield select(getOptions);
  yield put(filterAccCost(options));
}

export function* watchFilterSaga() {
  yield takeEvery(types.AGES_WATCHER, asyncUpdateAges);
  yield takeLatest(types.COSTS_WATCHER, asyncUpdateCosts);
}
