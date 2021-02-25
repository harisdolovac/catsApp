import axios from "axios";
import {
  FAVOURITE_CAT_LOADING,
  FAVOURITE_CAT_SUCCESS,
  FAVOURITE_CAT_FAILURE,
  DELETE_FAVOURITES,
} from "./actions-types";

const favouriteCatLoading = () => {
  return { type: FAVOURITE_CAT_LOADING };
};
const favouriteCatSuccess = (cat) => ({
  type: FAVOURITE_CAT_SUCCESS,
  payload: cat.data,
});

const favouriteCatFailure = (err) => ({
  type: FAVOURITE_CAT_FAILURE,
  payload: err,
});

export const favouriteCat = () => {
  return (dispatch) => {
    dispatch(favouriteCatLoading());
    return axios
      .get(`${process.env.REACT_APP_CAT_URL}/favourites`, {
        headers: {
          "x-api-key": `${process.env.REACT_APP_FAVOURITE_KEY}`,
        },
        params: {
          sub_id: "your-user-1234",
        },
      })
      .then(
        (cat) => dispatch(favouriteCatSuccess(cat)),
        (err) => dispatch(favouriteCatFailure(err))
      );
  };
};

const deleteFavourite = (cat, id) => ({
  type: DELETE_FAVOURITES,
  payload: id,
});

export const deleteFavouriteCat = (id) => {
  return async (dispatch) => {
    const cat = await axios.delete(
      `${process.env.REACT_APP_CAT_URL}/favourites/${id}`,
      {
        headers: {
          "x-api-key": `${process.env.REACT_APP_FAVOURITE_KEY}`,
        },
      }
    );

    return dispatch(deleteFavourite(cat, id));
  };
};
