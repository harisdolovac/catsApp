import React, { useState, useEffect } from "react";
import axios from "axios";

const MyFavourites = () => {
  const [favouriteImages, setFavouriteImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/favourites", {
        headers: {
          "x-api-key": "baba38b8-f29d-4777-a23b-5ca439e12373",
        },
        params: {
          sub_id: "your-user-1234",
        },
      })
      .then((res) =>
        res.data.map((item) => {
          return setFavouriteImages((prevState) => [...prevState, item]);
        })
      );
  }, []);

  const onDeleteFavourite = (id) => {
    axios
      .delete(`https://api.thecatapi.com/v1/favourites/${id}`, {
        headers: {
          "x-api-key": "baba38b8-f29d-4777-a23b-5ca439e12373",
        },
      })
      .then((res) => console.log(res));
    const data = favouriteImages.filter((i) => i.id !== id);
    console.log("data", data);
    console.log("pocetni", favouriteImages);
    setFavouriteImages(data);
  };

  const favImages = favouriteImages.map((item) => {
    const { id } = item;

    return (
      <div key={item + Math.random()}>
        <img src={item.image.url} />
        <button onClick={() => onDeleteFavourite(id)}>Delete Favourite</button>
      </div>
    );
  });

  return (
    <div>
      <h1>My favourites</h1>
      <p>List of favourites</p>
      {favImages}
    </div>
  );
};

export default MyFavourites;
