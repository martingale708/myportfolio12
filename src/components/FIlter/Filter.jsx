import React from 'react';
import PropTypes from 'prop-types';
import "../../sass/components/_filter.scss";

const Filter = ({ onFilterChange, activeFilter }) => {
  const filters = ["Tout", "HTML", "JavaScript", "React", "Gestion de projet", "Debug", "SEO"];
  console.log(`Current Active Filter: ${activeFilter}`); // Loguez la valeur actuelle

  return (
    <div className="filter__buttons-container">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter__button ${activeFilter.trim().toLowerCase() === filter.trim().toLowerCase() ? 'active' : ''}`}
          // className={`filter__button ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => {
            console.log(`Clicked filter: ${filter}`); // Ajoutez ce log
            onFilterChange(filter);
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
  
};
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default Filter;