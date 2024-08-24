 import React from "react";
import PropTypes from "prop-types";
import "../../sass/components/_projectlinks.scss";

const ProjectLinks = ({ site = "", github = "", tags = [] }) => {
  const handleExternalLinkClick = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project-links">
      <div className="links">
        {site && (
          <a
            href={site}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleExternalLinkClick(e, site)}
          >
            voir le site
          </a>
        )}
        {github && (
          <a
            href={github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleExternalLinkClick(e, github)}
          >
            GitHub
          </a>
        )}
      </div>
      <div className="tags">
        {tags.map((tag, index) => (
          <button key={tag} className="project-tag">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

ProjectLinks.propTypes = {
  site: PropTypes.string,
  github: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectLinks;