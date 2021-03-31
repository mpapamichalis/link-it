import React from "react";
//import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";
//import CreateEvent from "../components/CreateEvent";
//import EventList from "../components/Pages/EventList";
//mport 'bootstrap/dist/css/bootstrap.min.css';
import CardLogin from '../components/CardLogin';

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <CardLogin />
    </div>

  );

};

export default LoginPage;