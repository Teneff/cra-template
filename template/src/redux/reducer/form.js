import { FORM_LOADING, FORM_LOADED, FORM_SUBMITTING, FORM_SUBMITTED } from '../actionTypes';

const initialState = {
  loading: false,
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case FORM_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FORM_LOADED:
      return {
        ...state,
        loading: false,
      };

    case FORM_SUBMITTING:
      return {
        ...state,
        ...action.data,
        loading: true,
      };
    case FORM_SUBMITTED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default form;
