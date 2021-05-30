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
  const getOptions = (state) => state.optionsReducer;
  const options = yield select(getOptions);
  // if any cost filter is checked when user changes age filter, then filter according to cost, else just filter according to age
  if (options.costs.Food || options.costs.Gold || options.costs.Wood) {
    yield put(filterAccCost(options));
  } else {
    yield put(filterAccAge(options.age));
  }
}

function* asyncUpdateCosts(action) {
  // wait for little to take last change from ranger to update state
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
