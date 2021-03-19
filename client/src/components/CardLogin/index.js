import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";

function CardLogin() {
  
  const [formObject, setFormObject] = useState({})

  //Handles input made by user
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  //Event handler for onClick 
function handleSubmit(event){
  event.preventDefault();
 
console.log(formObject.email, formObject.password)
logInUser(formObject.email, formObject.password)
function logInUser(email, password){
  console.log(email, password)
  if (formObject.email && formObject.password) {
    API.getUser({
      email: formObject.email,
      password: formObject.password
   
    })
      .then(console.log("worked"))
      .catch(err => console.log(err));
  }

}

}
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box">
              <h1>Login</h1>
              <p className="text-muted"> Enter login and password</p>
              <input 
              type="text" 
              name="email" 
              onChange={handleInputChange}
               placeholder="Email"
               />

              <input 
                type="password" 
                name="password" 
                onChange={handleInputChange}
                placeholder="Password"
                />
              <div className="row2">
                <a className="forgot text-muted"  href="../signup">
                  Create Account
                </a>
                <input type="submit" name="" value="Login" onClick={handleSubmit} href="#"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLogin;
