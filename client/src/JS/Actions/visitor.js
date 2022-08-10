import axios from "axios";
import {
  CLEAR_ERRORS_VISITOR,
  CURRENT_VISITOR,
  FAIL_VISITOR,
  LOAD_VISITOR,
  LOGIN_VISITOR,
  LOGOUT_VISITOR,
  REGISTER_VISITOR,
} from "../ActionsTypes/visitor";

export const registerVisitor = (newVisitor) => async (dispatch) => {
  dispatch({ type: LOAD_VISITOR });
  try {
    let result = await axios.post("/api/visitor/registerVisitor", newVisitor);
    dispatch({ type: REGISTER_VISITOR, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_VISITOR, payload: error.response.data.error });
  }
};

export const loginVisitor = (visitor) => async (dispatch) => {
  dispatch({ type: LOAD_VISITOR });
  try {
    let result = await axios.post("/api/visitor/loginVisitor", visitor);
    dispatch({ type: LOGIN_VISITOR, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_VISITOR, payload: error.response.data.error });
  }
};

export const currentVisitor = () => async (dispatch) => {
  dispatch({ type: LOAD_VISITOR });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/visitor/currentVisitor", config);
    dispatch({ type: CURRENT_VISITOR, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_VISITOR, payload: error.response.data.error });
  }
};

export const logoutVisitor = () => async (dispatch) => {
  dispatch({ type: LOGOUT_VISITOR });
};

export const clearErrorsVisitor = () => {
  return {
    type: CLEAR_ERRORS_VISITOR,
  };
};
