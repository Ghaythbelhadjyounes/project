import {
  FAIL_Photos,
  GET_Photo,
  GET_Photos,
  LOAD_Photos,
} from "../ActionsTypes/photo";

const initialState = {
  ListPhotos: [],
  errors: null,
  load: false,
  photoById: {},
};

const photoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_Photos:
      return { ...state, load: true };
    case GET_Photos:
      return { ...state, load: false, ListPhotos: payload.ListPhotos };
    case GET_Photo:
      return { ...state, load: false, photoById: payload.photoById };
    case FAIL_Photos:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default photoReducer;
