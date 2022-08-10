import {
  CLEAR_ERRORS_ADMIN,
  CURRENT_ADMIN,
  FAIL_ADMIN,
  LOAD_ADMIN,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
  REGISTER_ADMIN,
} from "../ActionsTypes/admin";

const initialState = {
  admin: null,
  loadAdmin: false,
  errors: [],
  isAuthAdmin: false,
};
const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ADMIN:
      return { ...state, loadAdmin: true };
    case REGISTER_ADMIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadAdmin: false,
        admin: payload.admin,
        isAuthAdmin: true,
      };
    case LOGIN_ADMIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadAdmin: false,
        admin: payload.admin,
        isAuthAdmin: true,
      };
    case FAIL_ADMIN:
      return { ...state, loadAdmin: false, errors: payload };
    case LOGOUT_ADMIN:
      localStorage.removeItem("token");
      return {
        admin: null,
        loadAdmin: false,
        errors: null,
        isAuthAdmin: false,
      };
    case CURRENT_ADMIN:
      return {
        ...state,
        admin: payload,
        loadAdmin: false,
        isAuthAdmin: true,
      };

    case CLEAR_ERRORS_ADMIN:
      return { ...state, errors: null };

    default:
      return state;
  }
};

export default adminReducer;
