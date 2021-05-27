import { all } from "redux-saga/effects";
import { watchAgesSaga } from "./agesSaga";

export default function* rootSaga() {
  yield all([watchAgesSaga()]);
}
