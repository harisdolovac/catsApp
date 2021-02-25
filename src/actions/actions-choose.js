import axios from "axios";
import {
  CHOOSE_CAT_LOADING,
  CHOOSE_CAT_FAILURE,
  CHOOSE_CAT_SUCCESS,
  CHOOSE_CAT_FAVOURITE,
  CHOOSE_NEXT_PAGE,
} from "./actions-types";

const chooseCatLoading = () => {
  return { type: CHOOSE_CAT_LOADING };
};
const chooseCatSuccess = (cat) => ({
  type: CHOOSE_CAT_SUCCESS,
  payload: cat.data,
});

const chooseCatFailure = (err) => ({
  type: CHOOSE_CAT_FAILURE,
  payload: err,
});

export const chooseCat = () => {
  return (dispatch) => {
    dispatch(chooseCatLoading());
    return axios
      .get(`${process.env.REACT_APP_CAT_URL}/images/search`, {
        headers: {
          "x-api-key": `${process.env.REACT_APP_CAT_KEY}`,
        },
        params: {
          limit: 5,
          page: 0,
        },
      })
      .then(
        (cat) => dispatch(chooseCatSuccess(cat)),
        (err) => dispatch(chooseCatFailure(err))
      );
  };
};

const chooseFavourite = (cat) => ({
  type: CHOOSE_CAT_FAVOURITE,
  payload: cat.data,
});

export const chooseFavouriteCat = (id) => {
  return async (dispatch) => {
    const cat = await axios.post(
      `${process.env.REACT_APP_CAT_URL}/favourites`,
      {
        image_id: `${id}`,
        sub_id: "your-user-1234",
      },
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": `${process.env.REACT_APP_FAVOURITE_KEY}`,
        },
      }
    );
    return dispatch(chooseFavourite(cat));
  };
};

export const nextPage = () => {
  return {
    type: CHOOSE_NEXT_PAGE,
  };
};
