import React from 'react';

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className='project-list'>
      {projects &&
        projects.map((project) => (
          <img className='project-list__img' src={project.img}></img>
        ))}
    </div>
  );
};

export default ProjectList;
