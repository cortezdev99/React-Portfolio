import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  const { project } = props;

  if (project) {
    return (
      <div className='project-details__container'>
        <div className='project-details__banner-image' style={{backgroundImage: "url(" + project.urlBanner + ")"}}>
          <div className='project-details__logo'>
            <img src={project.urlLogo} alt="logo" />
          </div>
        </div>
        
        <div className='grid'>
          <div className='project-details__title'>
            {project.title}

            <div className='project-details__line' />
          </div>
        </div>


        <div className='project-details__content'>
          {project.content}
        </div>

        <div className='links'>
          <div className='project-details__link'>
            {project.websiteLink}
          </div>

          <div className='project-details__link'>
            {project.githubLink}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='project-details__loading'>
        Loading...
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)