import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProjectSummary extends Component {
  render() {
    const { project, darkmode } = this.props

    if (!darkmode) {
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
              {project.shortContent}
            </span>
          </div>
        </div>
      )
    } else {
      return (
        <div className='project-summary dark-project-summary'>
          <div className='project-summary__front project-summary__background-image dark-project-summary__front project-summary__background-image' style={{ backgroundImage: "url(" + project.urlBackground + ")"}}>
            <div className='project-summary__front__logo-image dark-project-summary__front__logo-image'>
              <img src={project.urlLogo} alt="logo"/>
            </div>
          </div>
    
          <div className='project-summary__back dark-project-summary__back'>
            <span className='project-summary__title dark-project-summary__title'>
              {project.title}
            </span>
            <span className='project-summary__content dark-project-summary__content'>
              {project.shortContent}
            </span>
          </div>
        </div>
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    darkmode: state.darkmode.darkmode
  }
}

export default connect(mapStateToProps)(ProjectSummary)
