import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = ({ total }) => {
  return (
    <nav className="navBar">
      <div>
        <h1>Cats</h1>
        <h2>{total}</h2>
      </div>
      <Link to="/">
        <i className="fas fa-paw fa-5x"></i>
      </Link>
      <Link to="/selectCat" style={{ textDecoration: "none" }}>
        <h1>Choose Cat</h1>
      </Link>

      <Link to="/myFavourites">
        <h1>My Favourites</h1>
      </Link>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.calc.total,
  };
};

export default connect(mapStateToProps)(Navbar);
