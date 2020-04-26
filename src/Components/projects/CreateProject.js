import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      content: '',
      link: '',
      type: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createProject(this.state)
  }

  render() {
    return (
      <div className='create-project__container'>
        <form onSubmit={this.handleSubmit}>
          <div className='create-project__input'>
            <input type='text' id='title' placeholder='Title' onChange={this.handleChange} />
          </div>

          <div className='create-project__input'>
            <input type='text' id='content' placeholder='Content' onChange={this.handleChange} />
          </div>

          <div className='create-project__input'>
            <input type='text' id='link' placeholder='Link' onChange={this.handleChange} />
          </div>

          <div className='create-project__input'>
            <input type='text' id='type' placeholder='Type' onChange={this.handleChange} />
          </div>

          <div className='create-project__button'>
            <button>Create Project</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)