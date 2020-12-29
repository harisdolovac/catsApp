import { combineReducers } from "redux";
import incDecReducer from "./IncDec-reducer";

const rootReducer = combineReducers({
  calc: incDecReducer,
});

export default rootReducer;
