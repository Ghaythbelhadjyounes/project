import { combineReducers } from "redux";
import contactReducer from "./contact";
import boutiqueReducer from "./boutique";
import userReducer from "./user";
import adminReducer from "./admin";
import visitorReducer from "./visitor";
import photoReducer from "./photo";
import devisReducer from "./devis";
import todoReducer from "./todo";
const rootReducer = combineReducers({
  contactReducer,
  boutiqueReducer,
  userReducer,
  photoReducer,
  adminReducer,
  visitorReducer,
  devisReducer,
  todoReducer,
});
export default rootReducer;
