import {
  FAIL_TODOS,
  GET_TODO,
  GET_TODOS,
  LOAD_TODOS,
} from "../ActionsTypes/todo";

const initialState = {
  ListTodos: [],
  errors: null,
  load: false,
  todoById: {},
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TODOS:
      return { ...state, load: true };
    case GET_TODOS:
      return { ...state, load: false, ListTodos: payload.ListTodos };
    case GET_TODO:
      return { ...state, load: false, todoById: payload.todoById };
    case FAIL_TODOS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default todoReducer;
