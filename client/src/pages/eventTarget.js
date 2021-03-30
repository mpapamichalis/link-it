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



  return (
    <>{state.currentPost ? (

      <Container fluid>
        <NavLogged />
        <Row>
          <div className="col-md-4 offset-md-4">
          <Jumbotron>
              <h1>
                {state.currentPost.title}
              </h1>
              <article>
              <h5><p>{state.currentPost.where}</p></h5>
              <h6>Number of People Needed:<p>{state.currentPost.total}</p></h6>
              <h4><p>{state.currentPost.description}</p></h4>
            </article>
            </Jumbotron>
          </div>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/eventlist">← Back to Events</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default EventTarget;
