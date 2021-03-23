/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">LinkUp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to= "/login" className={ window.location.pathname === "/login" ?"nav-link active" : "nav-link"} aria-current="page">Login</Link>
        <Link to= "/signup" className={ window.location.pathname === "/signup" ?"nav-link active" : "nav-link"}>SignUp</Link>
        <Link to= "/about" className={ window.location.pathname === "/about" ?"nav-link active" : "nav-link"}>About</Link>
        {/* <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link> */}
      </div>
    </div>
  </div>
</nav>
);

}

export default Navbar;