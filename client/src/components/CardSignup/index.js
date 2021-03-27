import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';


function CardSigup() {

  const [formObject, setFormObject] = useState({})

  //Handles input made by user
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  //Event handler for onClick 
function handleSubmit(event){

event.preventDefault();
 
logInUser(formObject.username,formObject.email, formObject.password)
function logInUser(username, email, password){

  if (formObject.username && formObject.email && formObject.password) {
    API.createUser({
      username: formObject.username,
      email: formObject.email,
      password: formObject.password
   
    })
      .then(function(res){
        let uSer = JSON.stringify(res.data.auth);
        console.log(uSer)
        if (uSer === 'true'){
          window.location.replace('../login') 
        }
      })
      .catch(err => console.log(err));
  }
}

}

  return (
    <div className="container">
      {/* <CardLogin /> */}
      <div className="row">
        <div className="col-md-6">
          <div className="card" style = {{background: "black", width: 1000}} >
            <form className="box">
              <h1>Sign Up</h1>
              <p >Welcome!</p>
              <input 
              type="text" 
              name="username" 
              onChange={handleInputChange}
              placeholder="Username"/>
              <input 
              type="email" 
              name="email" 
              onChange={handleInputChange}
              placeholder="Email"/>
              <input 
              type="password" 
              name="password" 
              onChange={handleInputChange}
              placeholder="Password"/>
              <div className="row2">
                <input type="submit" name="" value="Signup"  onClick={handleSubmit} href="#"></input>
                <a className="already text-muted" href="/login">
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
