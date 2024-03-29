import React, { useState } from 'react';

import images from '../../data';

import Toolbar from '../Toolbar';
import ProjectList from '../ProjectList';

const Portfolio = () => {
  const [data, setData] = useState(images || []);
  const [activeFilter, setActiveFilter] = useState('All');

  const changeFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <Toolbar
        filters={['All', 'Websites', 'Flayers', 'Business Cards']}
        selected={activeFilter}
        onSelectFilter={changeFilter}
      />
      <ProjectList
        projects={data.filter((el) => {
          if (activeFilter === 'All') return true;
          return el.category === activeFilter;
        })}
      />
    </div>
  );
};

export default Portfolio;
