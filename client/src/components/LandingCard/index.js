//import React, { useState } from "react";
import "./style.css";
//import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from "./buttons.js";
import Logo from "./linkup-30.png";



function LandingCard() {

    return (

        <div className="container">
            {/* <CardLogin /> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={{ background: "black", width: 1000 }} >
                        <form className="landing">
                            <img src={Logo} alt="website logo" />
                            <p>People are relocating to new cities for jobs more than ever. Link Up is an application that makes it easier for transplants to make new connections and good memories.</p>
                            <Buttons />
                            <div className="row2">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LandingCard;