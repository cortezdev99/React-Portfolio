import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DeleteProject from './DeleteProject'
import ModalContext from '../../Contexts/ModalContext'

const ProjectDetails = (props) => {
  const { project, auth, id, darkmode } = props;
  const {
    modalIsOpen,
    setModalIsOpen,
    modalHeadingText,
    setModalHeadingText,
    modalContentText,
    setModalContentText
  } = useContext(ModalContext)

  const handleClick = () => {
    setModalIsOpen(true)
  }

  if (project) {
    console.log(project)
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

          {
            project.websiteLink ? (
              <div className='links'>
                <a href={project.websiteLink} className="animated-btn">
                  <FontAwesomeIcon icon="globe-americas" />Website
                </a>
      
                <a href={project.githubLink} className="animated-btn">
                  <FontAwesomeIcon icon="code" />Live Code
                </a>
                { auth.uid ? <DeleteProject project={project} id={id} /> : null }
              </div>
            ) : (
              <div className="links react-native-links">
                <a className="react-native-link animated-btn" href={project.andriodLink}>
                  Google Play Store
                </a>

                <button className="react-native-link animated-btn" onClick={handleClick}>
                  Apple App Store
                </button>

                <a className="react-native-link animated-btn" href={project.expoLink}>
                  Expo
                </a>

                <a className="react-native-link animated-btn" href={project.githubLink}>
                  <FontAwesomeIcon icon="code" />Live Code
                </a>
                
                { auth.uid ? <DeleteProject project={project} id={id} /> : null }
              </div>
            )
          }
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

          {
            project.websiteLink ? (
              <div className='links dark-links'>
                <a href={project.websiteLink} className="animated-btn neon-animated-btn">
                  <FontAwesomeIcon icon="globe-americas" />Website
                </a>
      
                <a href={project.githubLink} className="animated-btn neon-animated-btn">
                  <FontAwesomeIcon icon="code" />Live Code
                </a>
                { auth.uid ? <DeleteProject project={project} id={id} /> : null }
              </div>
            ) : (
              <div className="links dark-links react-native-links">
                <a className="react-native-link animated-btn neon-animated-btn" href={project.andriodLink}>
                  Google Play Store
                </a>

                <button className="react-native-link animated-btn neon-animated-btn" onClick={handleClick}>
                  Apple App Store
                </button>

                <a className="react-native-link animated-btn neon-animated-btn" href={project.expoLink}>
                  Expo
                </a>

                <a className="react-native-link animated-btn neon-animated-btn" href={project.githubLink}>
                  <FontAwesomeIcon icon="code" />Live Code
                </a>
                
                { auth.uid ? <DeleteProject project={project} id={id} /> : null }
              </div>
            )
          }
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