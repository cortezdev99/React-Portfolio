import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DeleteProject from './DeleteProject'

const ProjectDetails = (props) => {
  const { project, auth, id, darkmode } = props;
  if (project) {
    if (!darkmode) {
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
          <a href={project.websiteLink} className="animated-btn">
              {/* <div className='project-details__link dark-project-details__link project-details__btn'> */}
                <FontAwesomeIcon icon="globe-americas" />Website
              {/* </div> */}
            </a>
  
            <a href={project.githubLink} className="animated-btn">
              {/* <div className='project-details__link dark-project-details__link project-details__btn'> */}
                <FontAwesomeIcon icon="code" />Live Code
              {/* </div> */}
            </a>
            
            {/* <a href={project.websiteLink}>
              <div className='project-details__link'>
                <FontAwesomeIcon icon="globe-americas" />Website
              </div>
            </a>
  
            <a href={project.githubLink}>
              <div className='project-details__link'>
                <FontAwesomeIcon icon="code" />Live Code
              </div>
            </a> */}
  
            { auth.uid ? <DeleteProject project={project} id={id} /> : null }
          </div>
        </div>
      )
    } else {
      return (
        <div className='project-details__container dark-project-details__container'>
          <div className='project-details__banner-image dark-project-details__banner-image' style={{backgroundImage: "url(" + project.urlBanner + ")"}}>
            <div className='project-details__logo dark-project-details__logo'>
              <img src={project.urlLogo} alt="logo" />
            </div>
          </div>
          
          <div className='grid dark-grid'>
            <div className='project-details__title dark-project-details__title'>
              {project.title}
  
              <div className='project-details__line dark-project-details__line' />
            </div>
          </div>
  
  
          <div className='project-details__content dark-project-details__content'>
            {project.content}
          </div>
  
          <div className='links dark-links'>
            <a href={project.websiteLink} className="animated-btn neon-animated-btn">
              {/* <div className='project-details__link dark-project-details__link project-details__btn'> */}
                <FontAwesomeIcon icon="globe-americas" />Website
              {/* </div> */}
            </a>
  
            <a href={project.githubLink} className="animated-btn neon-animated-btn">
              {/* <div className='project-details__link dark-project-details__link project-details__btn'> */}
                <FontAwesomeIcon icon="code" />Live Code
              {/* </div> */}
            </a>
            { auth.uid ? <DeleteProject project={project} id={id} /> : null }
          </div>
        </div>
      )
    }
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
    project: project,
    auth: state.firebase.auth,
    id: id,
    darkmode: state.darkmode.darkmode
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)