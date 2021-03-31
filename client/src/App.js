import React from "react";
import CreateEvent from "./components/CreateEvent"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import CardLogin from "./components/CardLogin";
import CardSignup from "./components/CardSignup";
import Landing from "./pages/landing";
import EventList from "./pages/eventList";
import EventTarget from "./pages/eventTarget";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { StoreProvider } from "./utils/GlobalState";
import { Component } from "react";


export default class App extends Component {
  state = {
    isAuth: false
  };

render(){



  return (
    <Router>
      <div>
      <StoreProvider>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <CardLogin />
          </Route>
          <Route exact path="/signup">
            <CardSignup />
          </Route>
            {!this.state.isAuth && <Redirect to="/login"/>}
          <Route exact path="/event">
            <CreateEvent />
          </Route>
            <Route exact path="/eventList">
             <EventList /> 
            </Route>
            <Route component={EventTarget} exact path="/event/:id">
            </Route>
        </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}
}

