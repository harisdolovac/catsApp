import React from "react";
import Home from "./components/Home";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./reducers/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import ChooseCat from "./components/ChooseCat";
import MyFavourites from "./components/MyFavourites";
import Favourites from "./Favourites";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/selectCat">
            <ChooseCat />
          </Route>
          <Route path="/myFavourites">
            <MyFavourites />
          </Route>
          <Route path="/Favourites">
            <Favourites />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
