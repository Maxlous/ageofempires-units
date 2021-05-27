import { takeEvery, put } from "redux-saga/effects";
import { types } from "../types";
import {
  darkAge,
  feudalAge,
  castleAge,
  imperialAge,
  removeAge,
} from "../actions";

function* asyncUpdateAges(action) {
  if (action.payload === "Dark") yield put(darkAge());
  if (action.payload === "Feudal") yield put(feudalAge());
  if (action.payload === "Castle") yield put(castleAge());
  if (action.payload === "Imperial") yield put(imperialAge());
}

function* asyncRemoveAges(action) {
  if (action.payload === "Remove") yield put(removeAge(action.age));
}

export function* watchAgesSaga() {
  yield takeEvery(types.FILTER_FOR_AGE, asyncUpdateAges);
  yield takeEvery(types.REMOVE_AGE, asyncRemoveAges);
}
