import React from "react";
import PropTypes from "prop-types";

const Repo = ({ repo }) => {
  const { html_url, description, language, name } = repo;
  return (
    <a href={html_url} rel="noopener noreferrer" target="_blank">
      <div className="repo">
        <div className="repo-details">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="repo-languages">
          {language ? (
            <p>
              <span>{language}</span>
            </p>
          ) : null}
        </div>
      </div>
    </a>
  );
};

Repo.propTypes = {
  repo: PropTypes.object.isRequired
};

export default Repo;
