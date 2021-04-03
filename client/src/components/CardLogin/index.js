import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import swal from 'sweetalert';


function CardLogin(props) {

  
  const [formObject, setFormObject] = useState({})

  //Handles input made by user
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  //Event handler for onClick 
function handleSubmit(event){
  
  event.preventDefault();
 
logInUser(formObject.email, formObject.password)
function logInUser(email, password){

  if (formObject.email && formObject.password) {
    API.getUser({
      email: formObject.email,
      password: formObject.password
   
    })
      .then(function(res){
        let uSer = JSON.stringify(res.data.auth);
        console.log(JSON.stringify(res))
        if (uSer === 'true'){
          props.authenticate();
          props.history.push("/eventList")
        } 
      })
      .catch(err => swal("Email or password is incorrect")
      );
  }
}

}
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style = {{background: "black", width: 1000}}>
            <form className="box">
              <h1>Login</h1>
              <p className="text-muted"> Enter login and password</p>
              <input 
              type="text" 
              name="email" 
              onChange={handleInputChange}
               placeholder="Email"
              style={{color: "white"}} />

              <input 
                type="password" 
                name="password" 
                onChange={handleInputChange}
                style={{color: "white"}}  placeholder="Password"
                />
              <div className="row2">
                <a className="forgot text-muted"  href="../signup">
                  Create Account
                </a>
                <input type="submit" name="" value="Login" onClick={handleSubmit} href="/event"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLogin;
