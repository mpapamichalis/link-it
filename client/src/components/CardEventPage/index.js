import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import  ('../models/createEvent');

function EventsPage() {
  return (
      <div class="container">
        <div class="row row-cols-2">
          <div class="col"><input type="text" name="" placeholder="Event"></input></div>
          <div class="col"><input type="text" name="" placeholder="Event"></input></div>
          <div class="col"><input type="text" name="" placeholder="Event"></input></div>
          <div class="col"><input type="text" name="" placeholder="Event"></input></div>
          <div class="col"><input type="text" name="" placeholder="Event"></input></div>
          <div class="col"><input type="text" name="" placeholder="Event"></input></div>
        </div>
      </div>
  );
}
export default EventsPage;