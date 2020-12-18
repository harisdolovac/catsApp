import React, { useState } from "react";
import axios from "axios";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [imageId, setImageId] = useState();
  const [FavouriteImages, setFavouriteImages] = useState([]);
  const [id, setId] = useState();
  const [images, setImages] = useState([]);

  //   const instance = {
  //     method: "get",
  //     url: "https://api.thecatapi.com/v1/votes",

  //     headers: { ["x-api-key"]: "baba38b8-f29d-4777-a23b-5ca439e12373" },
  //   };

  //   axios(instance).then((res) => console.log(res));

  //   axios(`${instance}`).then((res) => console.log(res));

  const KEY = "baba38b8-f29d-4777-a23b-5ca439e12373";

  //res.data.map((item) => setFavourite(item.image_id)));

  //console.log(favourites);
  const handleId = () => {
    axios
      .get(`https://api.thecatapi.com/v1/favourites?api_key=${KEY}`)
      .then((res) => {
        //console.log("30", res.data);
        res.data.map((item) => {
          setImageId(item.image_id);
          console.log(item);
        });
        // setImageId(item.image_id)
        // res.data.map(
        //   (image) => console.log(image)
        //   //setFavouriteImages((prevState) => [...prevState, image.id])
        // );
      });
  };

  //console.log(favourites);
  //console.log(imageId);
  // console.log(id);

  const handleFavourite = () => {
    axios
      .post(`https://api.thecatapi.com/v1/favourites?api_key=${KEY}`, {
        image_id: "9ccXTANkb",
        // sub_id: "your-user-123",
      })
      .then((res) => {
        console.log(res);
        setId(res.data.id);
      });
  };

  const handleMyfavourite = () => {
    axios
      // .get(
      //   `https://api.thecatapi.com/v1/favourites?api_key=${KEY}&&sub_id=your-user-1234&&image_id=${imageId}&&${id}`
      // )
      .get(
        `https://api.thecatapi.com/v1/favourites?api_key=${KEY}&&sub_id=your-user-1234?image_id=${imageId}`
      )
      .then((item) => {
        console.log(item);
        item.data.map((res) => {
          console.log(res.id);
          if ((res.id = id)) {
            // setImages((prevState) => [...prevState, image.id])
            console.log(res.image);
          }
        });
      });
  };

  return (
    <div>
      <button onClick={handleFavourite}>handleFavourite</button>
      <button onClick={handleMyfavourite}>handleMyfavourite</button>
      <button onClick={handleId}>handleId</button>
    </div>
  );
};

export default Favourites;
