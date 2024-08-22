import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Projects from '../../data/projects.json';
import Filter from "../../components/FIlter/Filter"; // Assurez-vous que le chemin est correct
import ProjectLinks from "../../components/ProjectLinks/ProjectLinks";
import '../../sass/components/_projectgrid.scss';
import '../../sass/components/_tag.scss';

const ProjectsPage = () => {
  const [filter, setFilter] = useState("Tout");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="projectsGrid__container">
      <Filter onFilterChange={handleFilterChange} activeFilter={filter} />
      <ProjectsGrid filter={filter} />
    </div>
  );
};

const ProjectsGrid = ({ filter }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="grid__project">
      {Projects &&
        Projects.filter(project => filter === "Tout" || project.category === filter)
          .map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              onClick={handleClick}
            >
              <figure className="grid__project__card">
                <div className="grid__project__card-inner">
                  <div className="grid__project__card-front">
                    <img
                      className="grid__project__card-front-img"
                      src={project.cover}
                      alt={project.alt}
                    />
                    <h3 className="grid__project__card-front-title">
                      {project.title}
                    </h3>
                  </div>
                  <figcaption className="grid__project__card-back">
                    <h3 className="grid__project__card-back-title">
                      {project.title}
                    </h3>
                    <p className="grid__project__card-back-desc">
                      {project.description}
                    </p>
                     {/* Ajouter ProjectLinks ici */}
                     <ProjectLinks site={project.site} github={project.github} />
                  </figcaption>
                </div>
              </figure>
            </Link>
          ))}
    </div>
  );
};
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};
export default ProjectsPage;