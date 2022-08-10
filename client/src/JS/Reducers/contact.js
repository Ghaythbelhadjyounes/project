import {
  FAIL_CONTACTS,
  GET_CONTACT,
  GET_CONTACTS,
  LOAD_CONTACTS,
} from "../ActionsTypes/contact";

const initialState = {
  ListContacts: [],
  errors: null,
  load: false,
  contactById: {},
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, load: true };
    case GET_CONTACTS:
      return { ...state, load: false, ListContacts: payload.ListContacts };
    case GET_CONTACT:
      return { ...state, load: false, contactById: payload.contactById };
    case FAIL_CONTACTS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default contactReducer;
