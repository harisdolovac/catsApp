import * as actionTypes from "../actions/actions-types";

const initialState = {
  data: [],
  page: 0,
  loading: false,
  hasErrors: false,
};

export const chooseCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHOOSE_CAT_LOADING:
      return { ...state, loading: true };
    case actionTypes.CHOOSE_CAT_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actionTypes.CHOOSE_CAT_FAILURE:
      return { ...state, loading: false, hasErrors: action.payload };
    case actionTypes.CHOOSE_NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};

// CHOOSE_CAT_LOADING,
//   CHOOSE_CAT_FAILURE,
//   CHOOSE_CAT_FAVOURITE,

//   CHOOSE_CAT_SUCCESS,

//   CHOOSE_NEXT_PAGE,
