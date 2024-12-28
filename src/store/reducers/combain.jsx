import { combineReducers } from "redux";
import pickerReducer from "./picker";

export const rootReducer = combineReducers({
  picker: pickerReducer,
});
