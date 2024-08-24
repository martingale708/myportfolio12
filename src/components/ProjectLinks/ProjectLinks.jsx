import React from "react";
import "../../sass/components/_projectlinks.scss";

const ProjectLinks = ({ site, github, tags }) => {
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
        {tags &&
          tags.map((tag, index) => (
            <button key={index} className="project-tag">
              {tag}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProjectLinks;
