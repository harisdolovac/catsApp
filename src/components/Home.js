import React, { useState, useEffect } from "react";
import "../css/Home.css";
import axios from "axios";

const Home = () => {
  const [value, setValue] = useState();
  const [populateDropdown, setPopulateDropdown] = useState([]);
  const [imgUrl, setImgUrl] = useState();

  const URL = "https://api.thecatapi.com/v1";

  useEffect(() => {
    axios
      .get(`${URL}/categories`, {
        headers: {
          "x-api-key": "baba38b8-f29d-4777-a23b-5ca439e12373",
        },
      })
      .then((res) =>
        res.data.map((item) => {
          return setPopulateDropdown((prevState) => [...prevState, item]); //setCategories((prevState) => [...prevState, item]);
        })
      );
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/images/search`, {
        headers: {
          "x-api-key": "baba38b8-f29d-4777-a23b-5ca439e12373",
        },
      })
      .then((res) =>
        res.data.map((item) => {
          return setImgUrl(item.url); //setCategories((prevState) => [...prevState, item]);
        })
      );
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Your favorite flavor is: " + value);
    event.preventDefault();
    if (value === undefined) {
      axios
        .get(`${URL}/images/search`)
        .then((res) => res.data.map((resI) => setImgUrl(resI.url)));
    } else {
      axios(`${URL}/images/search?category_ids=${value}`).then((res) =>
        res.data.map((resI) => setImgUrl(resI.url))
      );
    }
  };

  return (
    <div className="home_container">
      <img src={imgUrl} className="home_image" alt="random cats"></img>
      <form onSubmit={handleSubmit}>
        <div className="home_buttons">
          <div className="cat_select_home">
            <input type="submit" value="Next cat" className="home_button" />
            <label>
              Pick cat category:
              <select value={value} onChange={handleChange} className="select">
                {populateDropdown.map((res) => (
                  <option key={res.id * Math.random()} value={res.id}>
                    {res.name}
                  </option>
                ))}

                <option>None</option>
              </select>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
