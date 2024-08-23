import React from "react";
import "../../sass/components/_projectlinks.scss";

const ProjectLinks = ({ site, github, tags }) => {
  return (
    <div className="project-links">
      <div className="links">
        {site && (
          <a
            href={site}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        )}
        {github && (
          <a
            href={github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur GitHub
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
