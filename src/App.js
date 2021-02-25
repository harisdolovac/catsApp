import React from "react";
import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./reducers/store";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyFavourites from "./components/MyFavourites";
import ChooseCat from "./components/ChooseCat";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/myfavourites">
            <MyFavourites />
          </Route>
          <Route path="/choose">
            <ChooseCat />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
