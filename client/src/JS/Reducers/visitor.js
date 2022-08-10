import {
  CLEAR_ERRORS_VISITOR,
  CURRENT_VISITOR,
  FAIL_VISITOR,
  LOAD_VISITOR,
  LOGIN_VISITOR,
  LOGOUT_VISITOR,
  REGISTER_VISITOR,
} from "../ActionsTypes/visitor";

const initialState = {
  visitor: null,
  loadVisitor: false,
  errors: [],
  isAuthVisitor: false,
};
const visitorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_VISITOR:
      return { ...state, loadVisitor: true };
    case REGISTER_VISITOR:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadVisitor: false,
        visitor: payload.visitor,
        isAuthVisitor: true,
      };
    case LOGIN_VISITOR:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loadVisitor: false,
        visitor: payload.visitor,
        isAuthVisitor: true,
      };
    case FAIL_VISITOR:
      return { ...state, loadVisitor: false, errors: payload };
    case LOGOUT_VISITOR:
      localStorage.removeItem("token");
      return {
        visitor: null,
        loadVisitor: false,
        errors: null,
        isAuthVisitor: false,
      };
    case CURRENT_VISITOR:
      return {
        ...state,
        visitor: payload,
        loadVisitor: false,
        isAuthVisitor: true,
      };

    case CLEAR_ERRORS_VISITOR:
      return { ...state, errors: null };

    default:
      return state;
  }
};

export default visitorReducer;
