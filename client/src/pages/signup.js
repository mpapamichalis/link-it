import React from "react";
//import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";
//import CreateEvent from "../components/CreateEvent";
//import EventList from "../components/Pages/EventList";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSigup from '../components/CardSignup';

const SignUpPage = () => {
  return (
    <div>
      <Navbar />
      <CardSigup />
    </div>

  );

};

export default SignUpPage;