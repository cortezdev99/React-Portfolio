import React from 'react'
import { Link } from 'react-router-dom'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
  return (
    <div className="project-list__container">
      {
        projects && projects.map(project => {
          return (
            <Link to={`/project/${project.id}`}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default ProjectList