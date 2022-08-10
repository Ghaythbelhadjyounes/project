import {
  FAIL_DEVISS,
  GET_DEVIS,
  GET_DEVISS,
  LOAD_DEVISS,
} from "../ActionsTypes/devis";
import axios from "axios";

export const getDeviss = () => async (dispatch) => {
  dispatch({ type: LOAD_DEVISS });
  try {
    let result = await axios.get("/api/devis/all");
    dispatch({ type: GET_DEVISS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_DEVISS, payload: error.response });
  }
};

export const addDevis = (newDevis) => async (dispatch) => {
  try {
    await axios.post("/api/devis/add", newDevis);
    dispatch(getDeviss());
  } catch (error) {
    dispatch({ type: FAIL_DEVISS, payload: error.response });
  }
};

export const deleteDevis = (id) => async (dispatch) => {
  try {
    await axios.delete(`api/devis/${id}`);
    dispatch(getDeviss());
  } catch (error) {
    dispatch({ type: FAIL_DEVISS, payload: error.response });
  }
};

export const editDevis = (id, newDevis) => async (dispatch) => {
  try {
    await axios.put(`/api/devis/${id}`, newDevis);
    dispatch(getDeviss());
  } catch (error) {
    dispatch({ type: FAIL_DEVISS, payload: error.response });
  }
};

export const getOneDevis = (id) => async (dispatch) => {
  dispatch({ type: LOAD_DEVISS });
  try {
    let result = await axios.get(`/api/devis/${id}`);
    dispatch({ type: GET_DEVIS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_DEVISS, payload: error.response });
  }
};
