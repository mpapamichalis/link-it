import React from "react";
import "./style.css";
// import {Grid, List, ListItem} from "semantic-ui-css";
import {Grid, Segment} from "semantic-ui-react";


// This file exports both the List and ListItem components

export function List ({ children }) {
  return (
    <div className="list-overflow-container">

      <ul className="list-group">{children}</ul>


    </div>
  );
}

export function ListItem({ children }) {
  return (
    <Grid.Column>
      <Segment>
      <li id="list" className="list-group-item">{children}</li>

      </Segment>
    </Grid.Column>

    // <div className="list-overflow-container">
    //   <div className="row justify-content-center">
    //     <div className="col-md-6">
    //       <li id="list" className="list-group-item">{children}</li>

    //     </div>
    //   </div>
    // </div>
    );
}
