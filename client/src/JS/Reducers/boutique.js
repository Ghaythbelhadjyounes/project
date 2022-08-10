import {
  FAIL_BOUTIQUES,
  GET_BOUTIQUE,
  GET_BOUTIQUES,
  LOAD_BOUTIQUES,
} from "../ActionsTypes/boutique";

const initialState = {
  ListBoutiques: [],
  errors: null,
  load: false,
  boutiqueById: {},
};

const boutiqueReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_BOUTIQUES:
      return { ...state, load: true };
    case GET_BOUTIQUES:
      return { ...state, load: false, ListBoutiques: payload.ListBoutiques };
    case GET_BOUTIQUE:
      return { ...state, load: false, boutiqueById: payload.boutiqueById };
    case FAIL_BOUTIQUES:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default boutiqueReducer;
