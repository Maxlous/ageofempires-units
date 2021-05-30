import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import optionsReducer from "./optionsReducer";

const rootReducer = combineReducers({
  filterReducer,
  optionsReducer,
});

export default rootReducer;
