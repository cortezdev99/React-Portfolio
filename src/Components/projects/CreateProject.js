import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { storage } from '../../config/fbConfig'
import firebase from '../../config/fbConfig'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      content: '',
      link: '',
      urlBackground: '',
      belongsTo: [0],
      progressBackground: '',
      fileNameBackground: '',
      urlLogo: '',
      progressLogo: '',
      fileNameLogo: ''
    }
    this.fileInput = React.createRef();
    this.fileInputTwo = React.createRef();
  }

  handleBelongsToChange = (event) => {
    if (event.target.value === "0, 1") {
      this.setState({
        belongsTo: [0, 1]
      })
    } else if (event.target.value === "0, 2") {
      this.setState({
        belongsTo: [0, 2]
      })
    } else if (event.target.value === "0, 3") {
      this.setState({
        belongsTo: [0, 3]
      })
    } else if (event.target.value === "0, 1, 2") {
      this.setState({
        belongsTo: [0, 1, 2]
      })
    } else if (event.target.value === "0, 1, 3") {
      this.setState({
        belongsTo: [0, 1, 3]
      })
    } else if (event.target.value === "0, 2, 3") {
      this.setState({
        belongsTo: [0, 2, 3]
      })
    } else {
      this.setState({
        belongsTo: [0]
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.fileInput.current.files[0]) {
      this.props.createProject(this.state)
    } else if (this.fileInput.current.files[0] && !this.fileInputTwo.current.files[0]) {
      const metadata = {
        contentType: 'image/jpeg'
      }

      const uploadTask = storage.ref(`backgroundImages/${this.fileInput.current.files[0].name}`).put(this.fileInput.current.files[0], metadata)

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
        
        //progress function ...
        const progressBackground = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
  
        this.setState({
          progressBackground: progressBackground
        })
      }, (error) => {
        // error function...
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      }, () => {
        // complete function ...
        storage.ref('backgroundImages').child(this.fileInput.current.files[0].name).getDownloadURL().then(url => {
          this.setState({
            urlBackground: url,
            fileNameBackground: this.fileInput.current.files[0].name
          })
        }).then(() => {
          this.props.createProject(this.state)
        })
      }
    )
  } else { 
      const metadata = {
        contentType: 'image/jpeg'
      }

      const uploadTask = storage.ref(`backgroundImages/${this.fileInput.current.files[0].name}`).put(this.fileInput.current.files[0], metadata)

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
        
        //progress function ...
        const progressBackground = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

        this.setState({
          progressBackground: progressBackground
        })
      }, (error) => {
        // error function...
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      }, () => {
        // complete function ...
        storage.ref('backgroundImages').child(this.fileInput.current.files[0].name).getDownloadURL().then(url => {
          this.setState({
            urlBackground: url,
            fileNameBackground: this.fileInput.current.files[0].name
          })
        }).then(() => {
            const uploadTaskLogo = storage.ref(`logoImages/${this.fileInputTwo.current.files[0].name}`).put(this.fileInputTwo.current.files[0], metadata)
            uploadTaskLogo.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
              
              //progress function ...
              const progressLogo = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

              this.setState({
                progressLogo: progressLogo
              })
            }, (error) => {
              // error function...
              switch (error.code) {
                case 'storage/unauthorized':
                  // User doesn't have permission to access the object
                  break;
                case 'storage/canceled':
                  // User canceled the upload
                  break;
                case 'storage/unknown':
                  // Unknown error occurred, inspect error.serverResponse
                  break;
                default:
                  break;
              }
            }, () => {
              // complete function ...
              storage.ref('logoImages').child(this.fileInputTwo.current.files[0].name).getDownloadURL().then(url => {
                this.setState({
                  urlLogo: url,
                  fileNameLogo: this.fileInputTwo.current.files[0].name
                })
              }).then(() => {
                this.props.createProject(this.state)
              })
            }
          )
        })
      }
    )
  }
}

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to='/sign-in' />
    }

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
            <select
              id="belongsTo"
              onChange={this.handleBelongsToChange}
            >
              <option value="0, 1">Python</option>
              <option value="0, 2">React</option>
              <option value="0, 3">Firebase</option>
              <option value="0, 1, 2">Python and React</option>
              <option value="0, 1, 3">Python and Firebase</option>
              <option value="0, 2, 3">React and Firebase</option>
            </select>
          </div>

          <div className='create-project__input'>
            <input type='file' id='backgroundImage' ref={this.fileInput} placeholder='Upload Background Image' onChange={this.handleChange} />
          </div>

          <div className="progress">
              <progress value={this.state.progressBackground} max="100" />
          </div>

          <div className='create-project__input'>
            <input type='file' id='logoImage' ref={this.fileInputTwo} placeholder='Upload Logo Image' onChange={this.handleChange} />
          </div>

          <div className="progress">
              <progress value={this.state.progressLogo} max="100" />
          </div>

          <div className='create-project__button'>
            <button>Create Project</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)