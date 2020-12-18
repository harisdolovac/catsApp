import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Favourites from "./Favourites";
import Test from "./Test";
import MyFavourites from "./MyFavourites";

function App() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const URL = "https://api.thecatapi.com/v1";

  const fetchData = () => {
    const imageSearch = `${URL}/images/search?api_key=baba38b8-f29d-4777-a23b-5ca439e12373`;
    const dorpdownSeatch = `${URL}/categories`;

    const getImageSearch = axios.get(imageSearch);
    const getDorpdownSeatch = axios.get(dorpdownSeatch);

    axios.all([getImageSearch, getDorpdownSeatch]).then(
      axios.spread((...allData) => {
        const allImageData = allData[0];
        const allDropdowndata = allData[1];
        const newData = allImageData.data;
        const newDrop = allDropdowndata.data;

        setData(newData);
        setCategories(newDrop);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios(`${URL}/images/search`).then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // console.log(data);

  // const handleSubmitCat = (e) => {
  //   e.preventDefault();
  //   axios(`${URL}/images/search?category_ids=${category}`).then((res) =>
  //     setData(res.data)
  //   );
  // };

  const handleCategories = (e) => {
    e.preventDefault();
    axios(`${URL}/categories`)
      //  .then((res) => setCategories(res.data))
      .then((res) => console.log(res.data))

      .catch((error) => console.log(error.res));
    setCategory(e.target.value);
  };
  //console.log("pocetni state", data);
  // console.log("categories", categories);
  // console.log("category", category);

  const handleCat = (e) => {
    e.preventDefault();
    if (category) {
      console.log("ima kategoriju");
      axios(`${URL}/images/search?category_ids=${category}`)
        .then((res) => setData(res.data))

        .catch((error) => console.log(error.res));
    } else {
      //console.log("nema kategoriju");
      axios(`${URL}/images/search`).then((res) => {
        setData(res.data);
      });
    }
  };

  // console.log("categores", category);

  // console.log(categories);

  return (
    <div className="App">
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.url} alt="cats" />
              <button onClick={handleCat}>Next Cat</button>
              <label>Categories</label>
              <select onClick={handleCategories}>
                {category !== undefined
                  ? categories.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })
                  : "Short by category"}
              </select>
            </div>
          );
        })}
      <Favourites />
      <Test />
      <MyFavourites />
    </div>
  );
}

export default App;
