import * as actionTypes from "../actions/actions-types";

const initialState = {
  products: [{ name: "haris", lastName: "Dolovac" }],
  total: 5,
};

const incDecReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        total: state.total + 1,
      };

    case actionTypes.DECREMENT:
      return {
        total: state.total - 1,
      };
    default:
      return state;
  }
};

export default incDecReducer;
