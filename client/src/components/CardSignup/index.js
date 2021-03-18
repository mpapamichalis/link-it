import React from "react";
// import CardLogin from "../CardLogin"
import "./style.css";

function CardSigup() {
  return (
    <div className="container">
      {/* <CardLogin /> */}
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box">
              <h1>Signup</h1>
              <p className="text-muted">Welcome!</p>
              <input type="text" name="" placeholder="Username"></input>
              <input type="email" name="" placeholder="Email"></input>
              <input type="password" name="" placeholder="Password"></input>
              <div className="row2">
                <input type="submit" name="" value="Signup" href="#"></input>
                <a className="already text-muted" href="/">
                  Already a user?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSigup;
