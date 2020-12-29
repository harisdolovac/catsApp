import * as actionTypes from "./actions-types";

export const Increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const Decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};
