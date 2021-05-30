import { all } from "redux-saga/effects";
import { watchFilterSaga } from "./filterSaga";

export default function* rootSaga() {
  yield all([watchFilterSaga()]);
}
