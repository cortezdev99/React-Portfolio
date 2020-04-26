import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className='project-summary__container'>
      <span className='project-summary__title'>
        {project.title}
      </span>

      <span className='project-content'>
        {project.content}
      </span>
    </div>
  )
}

export default ProjectSummary
