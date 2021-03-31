import React from "react";
import{createBrowserHistory} from "history";
import CreatePage from "./pages/create";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import Landing from "./pages/landing";
import EventList from "./pages/eventList";
import EventTarget from "./pages/eventTarget";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { StoreProvider } from "./utils/GlobalState";
import { Component } from "react";
const history = createBrowserHistory();

export default class App extends Component {
  state = {
    isAuth: false

  };
authenticate = ()=> {this.setState({isAuth: true})}
render(){



  return (
    <Router history = {history}>
      <div>
      <StoreProvider>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login" render={props => <LoginPage {...props} authenticate={this.authenticate}/> } />
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
            {!this.state.isAuth && <Redirect to="/login"/>}
          
        
            <Route component={CreatePage} exact path="/event">
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

