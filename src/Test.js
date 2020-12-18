import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `https://api.thecatapi.com/v1`,
  headers: {
    "x-api-key": "baba38b8-f29d-4777-a23b-5ca439e12373",
  },
  params: {
    limit: 3,
    page: 0,
  },
});

const Test = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState();

  const upadteCats = () => {
    api.get("/images/search").then((res) => setData(res.data));
  };

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

    // axios(
    //   {
    //     method: "post",
    //     url: "https://api.thecatapi.com/v1/favourites",
    //     data: {
    //       image_id: { id },
    //       sub_id: "your-user-1234",
    //     },
    //   },
    //   config
    // ).then((res) => console.log(res));

    // const ID = id;
    // console.log(ID);

    // const tes = JSON.stringify(id);
    // console.log(tes);

    //   const api1 = axios.create({
    //     baseURL: `https://api.thecatapi.com/v1`,
    //     headers: {
    //       "content-type": "application/json",
    //       "x-api-key": "baba38b8-f29d-4777-a23b-5ca439e12373",
    //     },

    //     //   data: {
    //     //     image_id: id,
    //     //     sub_id: "your-user-1234",
    //     //   },

    //     // data: {
    //     //   image_id: "19p",
    //     //   sub_id: "your-user-1234",
    //     // },
    //     Body: {
    //       image_id: "9ccXTANkb",
    //       sub_id: "your-user-1234",
    //     },

    //     // data: {
    //     //   image_id: "9ccXTANkb",
    //     //   sub_id: "your-user-1234",
    //     // },
    //   });
    //   api1.post(`/favourites`).then((res) => console.log(res));
  };

  console.log(data);
  const results = data.map((item) => {
    const { url, id } = item;
    return <img src={url} key={id} onClick={() => handleFavourite(id)} />;
  });

  return (
    <div>
      <p>saddsa</p>
      <button onClick={upadteCats}>Click me(Update cats)</button>
      {results}
    </div>
  );
};

export default Test;
