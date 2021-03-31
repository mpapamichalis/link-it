import React from "react";
//import { Col, Row, Container } from "../components/Grid";
import NavLogged from "../components/NavLoggedIn";
//import CreateEvent from "../components/CreateEvent";
//import EventList from "../components/Pages/EventList";
//import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEvent from '../components/CreateEvent';
import { Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { Col } from "../components/Grid";

const CreatePage = () => {
  const button = {
    background: "none",
    fontFamily: "Nunito Sans, sans-serif",
    margin: "25px auto",
    textAlign: "center",
    border: "2px solid rgba(11, 228, 210, 0.533)",
    padding: "10px 10px",
    width: "250px",
    outline: "none",
    color: "white",
    borderRadius: "24px",
    
  }

  return (
    <Container fluid>
    <div>
      <NavLogged />
      <CreateEvent />
      
    </div>
    
    <Col size="md-12">
<Link style={button} to="/eventlist">← Back to Events</Link>
</Col>

</Container>
  );

};

export default CreatePage;