import axios from "axios";
import {
  CLEAR_ERRORS_ADMIN,
  CURRENT_ADMIN,
  FAIL_ADMIN,
  LOAD_ADMIN,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
  REGISTER_ADMIN,
} from "../ActionsTypes/admin";

export const registerAdmin = (newAdmin) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    let result = await axios.post("/api/admin/registerAdmin", newAdmin);
    dispatch({ type: REGISTER_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.error });
  }
};

export const loginAdmin = (admin) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    let result = await axios.post("/api/admin/loginAdmin", admin);
    dispatch({ type: LOGIN_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.error });
  }
};

export const currentAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/admin/currentAdmin", config);
    dispatch({ type: CURRENT_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.error });
  }
};

export const logoutAdmin = () => async (dispatch) => {
  dispatch({ type: LOGOUT_ADMIN });
};

export const clearErrorsAdmin = () => {
  return {
    type: CLEAR_ERRORS_ADMIN,
  };
};
