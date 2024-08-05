import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../redux/action";

export const Navbar = ({isShow=false}) => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    dispatch(searchItem(searchTerm));
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          Web Shop
        </NavLink>
        {isShow &&
        <form className="form-inline">
          <input
            style={{ width: "300px" }}
            type="text"
            onChange={handleSearch}
            className="form-control mr-sm-2"
            placeholder="Search"
          />
        </form>
        }
        <NavLink to="/cart" className="btn btn-outline-dark m-2">
          <i className="fa fa-cart-shopping mr-1"></i> Cart 0{" "}
        </NavLink>
      </div>
    </nav>
  );
};