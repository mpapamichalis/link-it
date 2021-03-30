import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./linkup-15.png";

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={Logo} alt="website logo" />
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/login" id="nav-links" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} aria-current="page"><i class="sign in icon"></i></Link>
            <Link to="/signup" id="nav-links" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}><i class="user plus icon"></i></Link>
            {/* <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );

}

export default Navbar;