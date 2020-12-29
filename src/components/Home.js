import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const URL = "https://api.thecatapi.com/v1";

  const fetchData = () => {
    const imageSearch = `${URL}/images/search?api_key=baba38b8-f29d-4777-a23b-5ca439e12373`;
    const dropDownSearch = `${URL}/categories`;

    const getImageSearch = axios.get(imageSearch);
    const getdropDownSearch = axios.get(dropDownSearch);

    axios.all([getImageSearch, getdropDownSearch]).then(
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

  const handleCategories = (e) => {
    e.preventDefault();
    axios(`${URL}/categories`)
      //  .then((res) => setCategories(res.data))
      .then((res) => console.log(res.data))

      .catch((error) => console.log(error.res));
    setCategory(e.target.value);
  };

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
    <div>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id} className="home_container">
              <img src={item.url} alt="cats" className="home_image" />
              <div className="home_buttons">
                <button onClick={handleCat}>Next Cat</button>
                <div className="cat_select_home">
                  <label className="label" htmlFor="category_select">
                    Categories:
                  </label>
                  <select onClick={handleCategories} id="category_select">
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
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
