import {
  FAIL_BOUTIQUES,
  GET_BOUTIQUE,
  GET_BOUTIQUES,
  LOAD_BOUTIQUES,
} from "../ActionsTypes/boutique";
import axios from "axios";

export const getBoutiques = () => async (dispatch) => {
  dispatch({ type: LOAD_BOUTIQUES });
  try {
    let result = await axios.get("/api/boutique/all");
    dispatch({ type: GET_BOUTIQUES, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_BOUTIQUES, payload: error.response });
  }
};

export const addBoutique = (newBoutique) => async (dispatch) => {
  try {
    await axios.post("/api/boutique/add", newBoutique);
    dispatch(getBoutiques());
  } catch (error) {
    dispatch({ type: FAIL_BOUTIQUES, payload: error.response });
  }
};

export const deleteBoutique = (id) => async (dispatch) => {
  try {
    await axios.delete(`api/boutique/${id}`);
    dispatch(getBoutiques());
  } catch (error) {
    dispatch({ type: FAIL_BOUTIQUES, payload: error.response });
  }
};

export const editBoutique = (id, newBoutique) => async (dispatch) => {
  try {
    await axios.put(`/api/boutique/${id}`, newBoutique);
    dispatch(getBoutiques());
  } catch (error) {
    dispatch({ type: FAIL_BOUTIQUES, payload: error.response });
  }
};

export const getOneBoutique = (id) => async (dispatch) => {
  dispatch({ type: LOAD_BOUTIQUES });
  try {
    let result = await axios.get(`/api/boutique/${id}`);
    dispatch({ type: GET_BOUTIQUE, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_BOUTIQUES, payload: error.response });
  }
};
