import React from 'react'
import { Link } from 'react-router-dom'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects, filteredProjects}) => {
return (
    <div className="project-list__container">
      {
        filteredProjects === undefined ? (
          projects && projects.map(project => {
            // debugger;
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          )
        })
        ) : (
          filteredProjects.map(project => {
            // debugger;
            console.log(filteredProjects)
            console.log(project)
            return (
              <Link to={`/project/${project.urlBackground}`} key={project.urlBackground}>
                <ProjectSummary project={project} />
              </Link>
            )
          })
        )
      }
    </div>
  )
}

export default ProjectList