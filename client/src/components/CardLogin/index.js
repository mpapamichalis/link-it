import React from "react";
import SignUp from "../CardSignup"
import "./style.css";

function CardLogin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box">
              <h1>Login</h1>
              <p className="text-muted"> Enter login and password</p>
              <input type="text" name="" placeholder="Username"></input>
              <input type="password" name="" placeholder="Password"></input>
              <div className="row2">
                <a className="forgot text-muted" path={SignUp} href="../signup">
                  Create Account
                </a>
                <input type="submit" name="" value="Login" href="#"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLogin;
