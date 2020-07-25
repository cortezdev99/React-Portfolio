import React from 'react'
import { Link } from 'react-router-dom'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects, filteredProjects}) => {
  return (
    <div className="project-list__container">
      {
        filteredProjects === undefined ? (
          projects ? (
              projects.map(project => {
              return (
                <Link to={`/project/${project.id}`} key={project.id}>
                  <ProjectSummary project={project} projectId={project.id}/>
                </Link>
              )
            })
          ) : (
            <div className='loading-wrapper-homepage'>
              <div className='loading-gif' style={{backgroundImage: "url(https://i.gifer.com/IXNp.gif)"}}></div>
              <div className='loading-text'>
                loading...
              </div>
            </div>
          )
        ) : (
          filteredProjects.map(project => {
            return (
              <Link to={`/project/${project.docId}`} key={project.docId}>
                <ProjectSummary project={project} projectId={project.docId} />
              </Link>
            )
          })
        )
      }
    </div>
  )
}

export default ProjectList