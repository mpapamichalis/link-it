//import React, { useState } from "react";
import "./style.css";
//import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Buttons() {
    return (
        <div>
            <Link to="/signup" id="button" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"} >Sign Up</Link>
            <Link to="/login" id="button" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} >Login</Link>
        </div>

    );
}

export default Buttons;