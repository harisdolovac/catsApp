import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/ChooseCat.css";

const ChooseCat = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(0);

  const api = axios.create({
    baseURL: `https://api.thecatapi.com/v1`,
    headers: {
      "x-api-key": "baba38b8-f29d-4777-a23b-5ca439e12373",
    },
    params: {
      limit: 6,
      page: page,
    },
  });
  console.log(data);

  useEffect(() => {
    api.get("/images/search").then((res) => setData(res.data));
  }, [page]);

  const handleFavourite = (id) => {
    const config = {
      headers: {
        "content-type": "application/json",
        "x-api-key": "baba38b8-f29d-4777-a23b-5ca439e12373",
      },
    };

    axios.post(
      "https://api.thecatapi.com/v1/favourites",
      {
        image_id: `${id}`,
        sub_id: "your-user-1234",
      },
      config
    );
  };

  console.log(data);
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
    setPage((page) => page + 1);
    console.log(page);
  };

  return (
    <div>
      <div className="results_ChooseCat">{results}</div>

      <button onClick={handlePagination} className="button_chooseCat">
        Next Page
      </button>
    </div>
  );
};

export default ChooseCat;
