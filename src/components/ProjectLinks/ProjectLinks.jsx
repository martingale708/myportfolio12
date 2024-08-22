import React from 'react';
import '../../sass/components/_projectlinks.scss'; 

const ProjectLinks = ({ site, github }) => {
  return (
    <div className="project-links">
      {site && (
        <a href={site} className="project-link" target="_blank" rel="noopener noreferrer">
          Voir le site
        </a>
      )}
      {github && (
        <a href={github} className="project-link" target="_blank" rel="noopener noreferrer">
          Voir sur GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;