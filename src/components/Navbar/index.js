//  @Package
import React from "react";
import { Link } from "react-router-dom";
//  @Own
import { SearchForm } from "../SearchForm";
import logo from "../../assets/images/3.png";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container-nav">
      <div className="container-logo">
        <Link to="/">
          <img className="logo-nav" src={logo} alt="logo-nav" />
        </Link>
      </div>
      <SearchForm />
    </div>
  );
};

export default Navbar;
