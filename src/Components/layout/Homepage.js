import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

import image from '../../images/homepageImages/mountains.jpg'
import ProjectList from '../projects/ProjectList'
import { filterProjects } from '../../store/actions/projectActions'

class Homepage extends Component {

  // shouldComponentUpdate(nextProps) {
  //   if (this.props != nextProps) {
  //     (_id) => this.props.filterProjects(_id)
  //   }
  //   return true
  // }

  handleFilterProjects = (_id) => {
    this.props.filterProjects(_id)
  }

  render() {
    const { projects, filteredProjects } = this.props
    console.log(filteredProjects)
    const projectList = filteredProjects.length > 0 ? (
        <div className="homepage__projects">
          <ProjectList projects={projects} filteredProjects={filteredProjects}  />
        </div>
    ) : (
      <div className="homepage__projects">
          <ProjectList projects={projects} />
      </div>
    )

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
          <div className='homepage__project-filter__all btn' onClick={() => this.handleFilterProjects(0)}>
            All
          </div>
          <div className='homepage__project-filter__react btn' onClick={() => this.handleFilterProjects(2)}>
            React
          </div>
          <div className='homepage__project-filter__firebase btn' onClick={() => this.handleFilterProjects(3)}>
            Firebase
          </div>
          <div className='homepage__project-filter__python btn' onClick={() => this.handleFilterProjects(1)}>
            Python
          </div>
        </div>

        { projectList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    filteredProjects: state.project.filteredProjects
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
