import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  chooseCat,
  chooseFavouriteCat,
  nextPage,
} from "../actions/actions-choose";

import "../css/ChooseCat.css";

const ChooseCat = () => {
  const data = useSelector((state) => state.chooseCat.data);
  const page = useSelector((state) => state.chooseCat.page);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chooseCat());
  }, [page, dispatch]);

  const handleFavourite = (id) => {
    dispatch(chooseFavouriteCat(id));
  };

  const results = data.map((item) => {
    const { url, id } = item;
    return (
      <div className="container" key={id}>
        <img
          src={url}
          onClick={() => handleFavourite(id)}
          className="image_chooseCat"
          alt="choose cat"
        ></img>
      </div>
    );
  });

  const handlePagination = () => {
    dispatch(nextPage());
  };

  return (
    <div>
      <h1>Click on cat to make your favourite</h1>
      <div className="results_ChooseCat">{results}</div>
      <button onClick={handlePagination} className="button_chooseCat">
        Next Page
      </button>
    </div>
  );
};

export default ChooseCat;
