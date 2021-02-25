import React, { useEffect } from "react";
import "../css/Home.css";

import { useSelector, useDispatch } from "react-redux";
import { getDropdownCat, getUser, userValue } from "../actions/actionsHome";

const Home = () => {
  const dropdown = useSelector((state) => state.homeN.populateDropdown);
  const imgUrl = useSelector((state) => state.homeImg.imageUrl);
  const dispatch = useDispatch();

  const valueR = useSelector((state) => state.userValue.value);

  useEffect(() => {
    dispatch(getDropdownCat());
    dispatch(getUser(valueR));
  }, [dispatch, valueR]);

  const handleChange = (e) => {
    const dataV = e.target.value;

    dispatch(userValue(dataV));
  };
  const handleSubmit = (e, valueR) => {
    e.preventDefault();
    dispatch(getUser(valueR));
  };
  console.log(imgUrl);

  return (
    <>
      <h1>View cat</h1>
      <div className="home_container">
        {imgUrl === "" ? (
          "LOADING...."
        ) : (
          <img src={imgUrl} className="home_image" alt="random cats"></img>
        )}

        <form onSubmit={(e) => handleSubmit(e, valueR)}>
          <div className="home_buttons">
            <div className="cat_select_home">
              <input type="submit" value="Next cat" className="home_button" />

              <label>
                <h3>Pick cat category:</h3>
                <select
                  className="select"
                  onChange={handleChange}
                  value={valueR}
                >
                  <option value="">Random</option>
                  {dropdown.map((res) => (
                    <option key={res.id * Math.random()} value={res.id}>
                      {res.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
