import React,{useState} from "react";
import API from "../../utils/API";
import "./style.css";
import axios from 'axios';

function CreateEvent() {
    const [eventCreate, setEventCreate] = useState({})
    //Handles input for event
  function handleInputChange(event) {
    const { name, value } = event.target;
    setEventCreate({...eventCreate, [name]: value})
  };

  function handleSubmit(event){
    event.preventDefault();
   
  console.log(eventCreate.where, eventCreate.total, eventCreate.description)
  createE(eventCreate.title, eventCreate.where, eventCreate.total, eventCreate.description)
  function createE(title, where, total, description){
    console.log(title, where, total, description)
    if (eventCreate.where && eventCreate.total && eventCreate.description) {
      API.eventPost({
        title: eventCreate.title,
        where: eventCreate.where,
        total: eventCreate.total,
        description: eventCreate.description
     
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
              <h1>Create Your Event</h1>
              <p className="text-muted"></p>
              <input type="text" name="title" placeholder="Title/Activity" onChange={handleInputChange}></input>
              <input type="location" name="where" placeholder="Where: Location" onChange={handleInputChange}></input>
              <input type="amount" name="total" placeholder="Amount of People" onChange={handleInputChange}></input>
              <input type="description" name="description" placeholder="Description" onChange={handleInputChange}></input>
              <div className="row2">
                <input type="submit" name="create" value="Create" onClick={handleSubmit} href="/eventsPage"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
