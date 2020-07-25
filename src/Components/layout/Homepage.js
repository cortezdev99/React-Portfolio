import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import image from '../../images/homepageImages/mountains.jpg'
import darkImage from '../../images/homepageImages/darkHomepage.jpg'
import ProjectList from '../projects/ProjectList'
import { filterProjects } from '../../store/actions/projectActions'
class Homepage extends Component {
  constructor() {
    super() 

    this.state = {
      active: false,
      active1: false,
      active2: false,
      active3: false
    }
  }

  handleFilterProjects = (_id) => {
    this.props.filterProjects(_id)
    
    if (_id === 0) {
      this.setState({
        active: true,
        active1: false,
        active2: false,
        active3: false
      })
    } else if (_id === 1) {
      this.setState({
        active: false,
        active1: true,
        active2: false,
        active3: false
      })
    } else if (_id === 2) {
      this.setState({
        active: false,
        active1: false,
        active2: true,
        active3: false
      })
    } else {
      this.setState({
        active: false,
        active1: false,
        active2: false,
        active3: true
      })
    }
  }

  handleProjectsToShow = (projects, filteredProjects, darkmode) => {
    if (filteredProjects.length > 0) {
      if (darkmode) {
        return (
          <div className="homepage__projects dark-homepage__projects">
            <ProjectList projects={projects} filteredProjects={filteredProjects}  />
          </div>
        )
      } else {
        return (
          <div className="homepage__projects">
            <ProjectList projects={projects} filteredProjects={filteredProjects}  />
          </div>
        )
      }
    } else {
      if (darkmode) {
        return (
          <div className="homepage__projects dark-homepage__projects">
            <ProjectList projects={projects} />
          </div>
        )
      } else {
        return (
        <div className="homepage__projects">
          <ProjectList projects={projects} />
        </div>
        )
      }
    }
  }

  render() {
    const { projects, filteredProjects, darkmode } = this.props
    const projectList = this.handleProjectsToShow(projects, filteredProjects, darkmode)

    if (!darkmode) {
      return (
        <div className='homepage'>
          <div className="homepage__image">
            <div className='image'style={{backgroundImage: "url(" + image + ")"}}>
              <div className='shader'>
                <div className="homepage__text typewriter-animation">
                  Hello there, my name's Michael.
                </div>
  
                <div className="homepage__text__2 typewriter-animation__2">
                  I'm a FullStack Software Developer.
                </div>
              </div>
            </div>
          </div>
  
  
          <div className="homepage__heading">
            <div>Check out my projects!</div>
            <div className='line'></div>
          </div>
  
          <div className="homepage__project-filter">
            { this.state.active ? ( <div className='homepage__project-filter__all btn active_filter' onClick={() => this.handleFilterProjects(0)}>
                All
              </div>
            ) : (
              <div className='homepage__project-filter__all btn' onClick={() => this.handleFilterProjects(0)}>
                All
              </div>
            )} 
  
            { this.state.active2 ? (
              <div className='homepage__project-filter__react btn active_filter' onClick={() => this.handleFilterProjects(2)}>
                React
              </div>
            ) : (
              <div className='homepage__project-filter__react btn' onClick={() => this.handleFilterProjects(2)}>
                React
              </div>
            )}
            
            { this.state.active1 ? (
              <div className='homepage__project-filter__react-native btn active_filter' onClick={() => this.handleFilterProjects(1)}>
                React-Native
              </div>
            ) : (
              <div className='homepage__project-filter__react-native btn' onClick={() => this.handleFilterProjects(1)}>
                React-Native
              </div>
            )}

            { this.state.active3 ? (
              <div className='homepage__project-filter__firebase btn active_filter' onClick={() => this.handleFilterProjects(3)}>
                Firebase
              </div>
            ) : (
              <div className='homepage__project-filter__firebase btn' onClick={() => this.handleFilterProjects(3)}>
                Firebase
              </div>
            )}
          </div>
  
          { projectList }
        </div>
      )
    } else {
      return (
        <div className='homepage dark-homepage'>
          <div className="homepage__image dark-homepage__image">
            <div className='image'style={{backgroundImage: "url(" + darkImage + ")"}}>
              <div className='shader dark-shader'>
                <div className="homepage__text typewriter-animation dark-homepage__text">
                  Hello there, my name's Michael.
                </div>
  
                <div className="homepage__text__2 typewriter-animation__2 dark-homepage__text__2">
                  I'm a FullStack Software Developer.
                </div>
              </div>
            </div>
          </div>
  
  
          <div className="homepage__heading dark-homepage__heading">
            <div>Check out my projects!</div>
            <div className='line dark-line'></div>
          </div>
  
          <div className="homepage__project-filter dark-homepage__project-filter">
            { this.state.active ? ( <div className='homepage__project-filter__all btn dark-active_filter' onClick={() => this.handleFilterProjects(0)}>
                All
              </div>
            ) : (
              <div className='homepage__project-filter__all btn' onClick={() => this.handleFilterProjects(0)}>
                All
              </div>
            )} 
  
            { this.state.active2 ? (
              <div className='homepage__project-filter__react btn dark-active_filter' onClick={() => this.handleFilterProjects(2)}>
                React
              </div>
            ) : (
              <div className='homepage__project-filter__react btn' onClick={() => this.handleFilterProjects(2)}>
                React
              </div>
            )}
            
            { this.state.active3 ? (
              <div className='homepage__project-filter__firebase btn dark-active_filter' onClick={() => this.handleFilterProjects(3)}>
                Firebase
              </div>
            ) : (
              <div className='homepage__project-filter__firebase btn' onClick={() => this.handleFilterProjects(3)}>
                Firebase
              </div>
            )}
  
            { this.state.active1 ? (
              <div className='homepage__project-filter__python btn dark-active_filter' onClick={() => this.handleFilterProjects(1)}>
                Python
              </div>
            ) : (
              <div className='homepage__project-filter__python btn' onClick={() => this.handleFilterProjects(1)}>
                Python
              </div>
            )}
          </div>
  
          { projectList }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    filteredProjects: state.project.filteredProjects,
    darkmode: state.darkmode.darkmode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterProjects: (_id) => dispatch(filterProjects(_id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Homepage)
