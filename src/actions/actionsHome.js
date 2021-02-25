import axios from "axios";
import {
  GET_DROPDOWN_CAT,
  GET_DROPDOWN_CAT_SUCCESS,
  GET_DROPDOWN_CAT_FAILURE,
  GET_CHANGE_CAT,
  GET_CURRENT_USER_VALUE,
} from "./actions-types";

export function getDropdownCatLoading() {
  return { type: GET_DROPDOWN_CAT };
}
export const getDropdownCatSuccess = (cat) => ({
  type: GET_DROPDOWN_CAT_SUCCESS,
  payload: cat.data,
});

export const getDropdownCatFailure = (err) => ({
  type: GET_DROPDOWN_CAT_FAILURE,
  payload: err,
});

export const getDropdownCat = () => {
  return (dispatch) => {
    dispatch(getDropdownCatLoading());
    return axios
      .get(`${process.env.REACT_APP_CAT_URL}/categories`, {
        headers: {
          "x-api-key": `${process.env.REACT_APP_CAT_KEY}`,
        },
      })
      .then(
        (cat) => dispatch(getDropdownCatSuccess(cat)),
        (err) => dispatch(getDropdownCatFailure(err))
      );
  };
};

export const getChangeCat = (cat) => ({
  type: GET_CHANGE_CAT,
  payload: cat.data[0].url,
});

export const getUser = (valueR) => {
  if (valueR === "") {
    return (dispatch) => {
      console.log("onaj prvi");
      axios
        .get(`${process.env.REACT_APP_CAT_URL}/images/search`, {
          headers: {
            "x-api-key": `${process.env.REACT_APP_CAT_KEY}`,
          },
        })

        .then((cat) => dispatch(getChangeCat(cat)));
    };
  } else {
    return (dispatch) => {
      console.log("radim");
      axios
        .get(
          `${process.env.REACT_APP_CAT_URL}/images/search?category_ids=${valueR}`,
          {
            headers: {
              "x-api-key": `${process.env.REACT_APP_CAT_KEY}`,
            },
          }
        )
        .then((cat) => dispatch(getChangeCat(cat)));
    };
  }
};

export const userValue = (dataV) => {
  return { type: GET_CURRENT_USER_VALUE, payload: dataV };
};
