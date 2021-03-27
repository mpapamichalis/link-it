import React from "react";
//import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";
//import CreateEvent from "../components/CreateEvent";
//import EventList from "../components/Pages/EventList";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingCard from '../components/LandingCard';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <LandingCard />
    </div>

  );

};

export default Landing;
