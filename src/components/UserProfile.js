import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getRepos } from "../api/GithubAPI";
import UserRepos from "./UserRepos";

class UserProfile extends Component {
  state = {
    repos: [],
    reposError: ""
  };

  componentDidMount() {
    const { username, token } = this.props;
    if (!username) {
      return;
    }
    getRepos(token, username)
      .then(repos => {
        this.setState({ repos });
      })
      .catch(reposError => this.setState({ reposError }));
  }
  render() {
    const { user, username } = this.props;
    if (!username) {
      return <Redirect to="/" />;
    }

    const { repos, reposError } = this.state;
    const {
      avatar_url,
      login,
      public_repos,
      followers,
      following,
      html_url
    } = user;
    return (
      <>
        <Link className="close-user-profile" to="/">
          Back
        </Link>
        <div className="user-profile">
          <div className="avatar-wrapper">
            <img className="user-avatar" src={avatar_url} alt="User" />
          </div>
          <div className="user-details">
            <p>
              Username:{" "}
              <a href={html_url} rel="noopener noreferrer" target="_blank">
                {login} <i class="fab fa-github" />
              </a>
            </p>
            <p>Repositories: {public_repos}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
          </div>
          {reposError === "" ? (
            <UserRepos repos={repos} username={login} />
          ) : (
            <h1>Cannot show repos: {reposError}</h1>
          )}
        </div>
      </>
    );
  }
}

UserProfile.propTypes = {
  token: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};
export default UserProfile;
