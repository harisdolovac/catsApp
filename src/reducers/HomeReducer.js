import * as actionTypes from "../actions/actions-types";

const initialState = {
  value: "",
  populateDropdown: [],
  imageUrl: "",
  loading: false,
  hasErrors: [],
  posts: [],
};

export const homeNReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DROPDOWN_CAT:
      return { ...state, loading: true };
    case actionTypes.GET_DROPDOWN_CAT_SUCCESS:
      return {
        populateDropdown: action.payload,
        loading: false,
        hasErrors: false,
      };

    case actionTypes.GET_DROPDOWN_CAT_FAILURE:
      return { ...state, loading: false, hasErrors: action.payload };

    default:
      return state;
  }
};

export const changeImgReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHANGE_CAT:
      return {
        ...state,
        imageUrl: action.payload,
        loading: false,
        hasErrors: false,
      };

    default:
      return state;
  }
};

export const userValue = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_USER_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
