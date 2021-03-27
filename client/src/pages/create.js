import React from "react";
//import { Col, Row, Container } from "../components/Grid";
import NavLogged from "../components/NavLoggedIn";
//import CreateEvent from "../components/CreateEvent";
//import EventList from "../components/Pages/EventList";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEvent from '../components/CreateEvent';

const CreatePage = () => {
  return (
    <div>
      <NavLogged />
      <CreateEvent />
    </div>

  );

};

export default CreatePage;