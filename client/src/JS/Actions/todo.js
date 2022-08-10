import {
  FAIL_TODOS,
  GET_TODO,
  GET_TODOS,
  LOAD_TODOS,
} from "../ActionsTypes/todo";
import axios from "axios";

export const getTodos = () => async (dispatch) => {
  dispatch({ type: LOAD_TODOS });
  try {
    let result = await axios.get("/api/todo/all");
    dispatch({ type: GET_TODOS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_TODOS, payload: error.response });
  }
};

export const addTodo = (newTodo) => async (dispatch) => {
  try {
    await axios.post("/api/todo/add", newTodo);
    dispatch(getTodos());
  } catch (error) {
    dispatch({ type: FAIL_TODOS, payload: error.response });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`api/todo/${id}`);
    dispatch(getTodos());
  } catch (error) {
    dispatch({ type: FAIL_TODOS, payload: error.response });
  }
};

export const editTodo = (id, newTodo) => async (dispatch) => {
  try {
    await axios.put(`/api/todo/${id}`, newTodo);
    dispatch(getTodos());
  } catch (error) {
    dispatch({ type: FAIL_TODOS, payload: error.response });
  }
};

export const getOneTodo = (id) => async (dispatch) => {
  dispatch({ type: LOAD_TODOS });
  try {
    let result = await axios.get(`/api/todo/${id}`);
    dispatch({ type: GET_TODO, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_TODOS, payload: error.response });
  }
};
