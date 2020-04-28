import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className='project-summary'>
      <div className='project-summary__front project-summary__background-image' style={{ backgroundImage: "url(" + project.urlBackground + ")"}}>
        <div className='project-summary__front__logo-image'>
          <img src={project.urlLogo} alt="logo"/>
        </div>
      </div>

      <div className='project-summary__back'>
        <span className='project-summary__title'>
          {project.title}
        </span>
        <span className='project-summary__content'>
          {project.content}
        </span>
      </div>
    </div>
  )
}

export default ProjectSummary
