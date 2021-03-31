import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST } from "../utils/actions";
import NavLogged from "../components/NavLoggedIn";
//import { Card, Icon } from "semantic-ui-react";


const EventTarget = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props?.match?.params?.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  const title = {
    fontSize: "50px",
    fontFamily: "Nunito Sans, sans-serif",
    marginTop: "-40px"
  }

  const location = {
    borderRadius: "24px",
    border: "2px solid rgb(179, 41, 179)",
    padding: "10px 10px",
    fontFamily: "Nunito Sans, sans-serif",

  }

  const amount = {
    borderRadius: "24px",
    border: "2px solid rgb(248, 190, 81)",
    padding: "10px 10px",
    fontFamily: "Nunito Sans, sans-serif",
  }
  const description = {
    borderRadius: "24px",
    border: "2px solid #3498db",
    padding: "10px 10px",
    fontFamily: "Nunito Sans, sans-serif",
  }

  const subtitle = {
    margin: "-5px"
  }

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
    <>{state.currentPost ? (


      <Container fluid>
        <NavLogged />
        <Row>
          <div className="col-md-4 offset-md-4">
            <Jumbotron>
              <h4 style={title}>{state.currentPost.title}</h4>
              <h4 style={subtitle}>Location:</h4>
              <h5 style={location}>{state.currentPost.where}</h5>
              <h4 style={subtitle}>Person Amount:</h4>
              <h5 style={amount}>{state.currentPost.total}</h5>
              <h4 style={subtitle}>Description:</h4>
              <h5 style={description}>{state.currentPost.description}</h5>
            </Jumbotron>
          </div>
        </Row>
        <Row>
          <Col size="md-12">
            <Link style={button} to="/eventlist">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
        <div>loading...</div>
      )}</>
  );
};

export default EventTarget;
