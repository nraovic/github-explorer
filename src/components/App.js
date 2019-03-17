import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "../App.css";
import LandingPage from "./LandingPage";
import UserProfile from "./UserProfile";

import {getUser} from "../api/GithubAPI";

class App extends Component {
  state = {
    token: "",
    username: "",
    user: {}
  };
  submitForm = (token, username, history) => {
    return getUser(token, username)
      .then(user => {
        this.setState({
          token,
          username,
          user
        });
        history.push(`/user/${username}`);
      })
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <LandingPage
                onSubmitForm={({ token, username }) =>
                  this.submitForm(token, username, history)
                }
              />
            )}
          />
          <Route
            path={`/user/${this.state.username}`}
            render={() => (
              <UserProfile
                user={this.state.user}
                token={this.state.token}
                username={this.state.username}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
