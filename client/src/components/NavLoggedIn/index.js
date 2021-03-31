/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./linkup-15.png"


function NavLogged() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img src={Logo} alt="website logo"/>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link  id="nav-links" to="/event" className={window.location.pathname === "/event" ? "nav-link active" : "nav-link"} aria-current="page">Create Event <i class="calendar plus outline icon"></i></Link>
            <Link id="nav-links" to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page">Logout <i class="sign out icon"></i></Link>
            {/* <Link id="nav-links" to="/eventList" className={window.location.pathname === "/eventList" ? "nav-link active" : "nav-link"} aria-current="page">Event List <i class="calendar alternate outline"></i></Link> */}
            {/* <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );

}

export default NavLogged;