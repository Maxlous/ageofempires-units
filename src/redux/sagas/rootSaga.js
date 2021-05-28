import { all, call } from "redux-saga/effects";
import { watchAgesSaga } from "./agesSaga";
import { watchCostsSaga } from "./costsSaga";

export default function* rootSaga() {
  yield all([call(watchAgesSaga), call(watchCostsSaga)]);
}
