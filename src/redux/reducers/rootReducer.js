import { combineReducers } from "redux";
import agesReducer from "./agesReducer";
import costsReducer from "./costsReducer";

const rootReducer = combineReducers({
  agesReducer,
  costsReducer,
});

export default rootReducer;
