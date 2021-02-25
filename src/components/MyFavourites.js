import React, { useEffect } from "react";
import "../css/Home.css";

import { useSelector, useDispatch } from "react-redux";
import {
  deleteFavouriteCat,
  favouriteCat,
} from "../actions/actions-favourites";
import "../css/MyFavourites.css";

const MyFavourites = () => {
  const favouriteImages = useSelector(
    (state) => state.getFavouriteReducer.favouriteImages
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favouriteCat());
  }, [dispatch]);

  const onDeleteFavourite = (id) => {
    dispatch(deleteFavouriteCat(id));
  };

  const favImages = favouriteImages.map((item) => {
    const { id } = item;

    return (
      <div key={item + Math.random()} className="container_Myfavourites">
        <img src={item.image.url} alt="favourite cat" />

        <button onClick={() => onDeleteFavourite(id)}>Delete Favourite</button>
      </div>
    );
  });

  return (
    <div>
      <h1>My favourites</h1>

      {favImages}
    </div>
  );
};

export default MyFavourites;
