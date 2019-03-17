import React from "react";
import PropTypes from "prop-types";

import Repo from "./Repo";

const UserRepos = ({ repos, username }) => (
  <div className="user-repos">
    <h2 className="user-repos-title">{`${username}'s repos`}</h2>
    <ul className="user-repos-list">
      {repos.map(repo => (
        <li key={repo.name}>
          <Repo repo={repo} />
        </li>
      ))}
    </ul>
  </div>
);

UserRepos.propTypes = {
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

export default UserRepos;
