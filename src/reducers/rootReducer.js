import { combineReducers } from "redux";

import { homeNReducer, changeImgReducer, userValue } from "./HomeReducer";
import { chooseCatReducer } from "./ChooseCatReducer";
import { getFavouriteReducer } from "./FavouritesReducer";

const rootReducer = combineReducers({
  homeN: homeNReducer,
  homeImg: changeImgReducer,
  userValue: userValue,
  chooseCat: chooseCatReducer,
  getFavouriteReducer: getFavouriteReducer,
});

export default rootReducer;
