import {
  FORM_LOADING,
  FORM_LOADED,
  FORM_SUBMITTED,
  FORM_SUBMITTING,
} from '../../redux/actionTypes';

export const mapStateToProps = (state) => state.form;

export const mapDispatchToProps = (dispatch) => ({
  onLoad: async () => {
    dispatch({
      type: FORM_LOADING,
    });

    dispatch({
      type: FORM_LOADED,
    });
  },
  onFormSubmit: async (data) => {
    dispatch({
      type: FORM_SUBMITTING,
      data,
    });

    await new Promise((resolve) => {
      setTimeout(() => resolve(), 2000);
    });

    dispatch({
      type: FORM_SUBMITTED,
    });
  },
});
