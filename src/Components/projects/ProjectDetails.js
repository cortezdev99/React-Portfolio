import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
  const { project } = props;

  if (project) {
    return (
      <div className='project-details__container'>
        <div className='project-details__title'>
          {project.title}
        </div>
  
        <div className='project-details__content'>
          {project.content}
        </div>
  
        <div className='project-details__link'>
          {project.link}
        </div>
  
        <div className='project-details__type'>
          {project.type}
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