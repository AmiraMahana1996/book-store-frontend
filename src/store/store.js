import { createStore } from "redux";
import userReducer from "../reducers/bookReducer";

function userStore(state = { rotating: true }) {
  return createStore(userReducer,state);
}

export default userStore;