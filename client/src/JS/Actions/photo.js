import {
  FAIL_Photos,
  GET_Photo,
  GET_Photos,
  LOAD_Photos,
} from "../ActionsTypes/photo";
import axios from "axios";

export const getPhotos = () => async (dispatch) => {
  dispatch({ type: LOAD_Photos });
  try {
    let result = await axios.get("/api/photo/all");
    dispatch({ type: GET_Photos, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_Photos, payload: error.response });
  }
};

export const addPhoto = (newPhoto) => async (dispatch) => {
  try {
    await axios.post("/api/photo/add", newPhoto);
    dispatch(getPhotos());
  } catch (error) {
    dispatch({ type: FAIL_Photos, payload: error.response });
  }
};

export const deletePhoto = (id) => async (dispatch) => {
  try {
    await axios.delete(`api/photo/${id}`);
    dispatch(getPhotos());
  } catch (error) {
    dispatch({ type: FAIL_Photos, payload: error.response });
  }
};

export const editPhoto = (id, newPhoto) => async (dispatch) => {
  try {
    await axios.put(`/api/photo/${id}`, newPhoto);
    dispatch(getPhotos());
  } catch (error) {
    dispatch({ type: FAIL_Photos, payload: error.response });
  }
};

export const getOnePhoto = (id) => async (dispatch) => {
  dispatch({ type: LOAD_Photos });
  try {
    let result = await axios.get(`/api/photo/${id}`);
    dispatch({ type: GET_Photo, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_Photos, payload: error.response });
  }
};
