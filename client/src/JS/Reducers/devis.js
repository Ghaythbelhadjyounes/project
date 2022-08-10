import {
  FAIL_DEVISS,
  GET_DEVIS,
  GET_DEVISS,
  LOAD_DEVISS,
} from "../ActionsTypes/devis";

const initialState = {
  ListDeviss: [],
  errors: null,
  load: false,
  devisById: {},
};

const devisReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DEVISS:
      return { ...state, load: true };
    case GET_DEVISS:
      return { ...state, load: false, ListDeviss: payload.ListDeviss };
    case GET_DEVIS:
      return { ...state, load: false, devisById: payload.devisById };
    case FAIL_DEVISS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default devisReducer;
