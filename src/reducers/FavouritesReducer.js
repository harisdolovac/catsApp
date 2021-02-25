import * as actionTypes from "../actions/actions-types";

const initialState = {
  favouriteImages: [],
  loading: false,
  hasErrors: [],
};

export const getFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FAVOURITE_CAT_LOADING:
      return { ...state, loading: true };
    case actionTypes.FAVOURITE_CAT_SUCCESS:
      return {
        favouriteImages: action.payload,
        loading: false,
        hasErrors: false,
      };

    case actionTypes.FAVOURITE_CAT_FAILURE:
      return { ...state, loading: false, hasErrors: action.payload };

    case actionTypes.DELETE_FAVOURITES:
      const data = state.favouriteImages.filter((i) => action.payload !== i.id);

      return {
        ...state,
        favouriteImages: data,
        loading: false,
        hasErrors: false,
      };

    default:
      return state;
  }
};
