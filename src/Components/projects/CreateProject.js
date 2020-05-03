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
      shortContent: '',
      content: '',
      websiteLink: '',
      urlBackground: '',
      belongsTo: [0],
      githubLink: '',
      progressBackground: '',
      fileNameBackground: '',
      urlLogo: '',
      progressLogo: '',
      fileNameLogo: '',
      urlBanner: '',
      progressBanner: '',
      fileNameBanner: '',
      twoImages: false,
      threeImages: false,
      thirdImageDone: false,
      done: false
    }
    this.fileInput = React.createRef();
    this.fileInputTwo = React.createRef();
    this.fileInputThree = React.createRef();
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

  handleImageUpload = (file, refName, fileName, progressStateName, urlStateName, fileStateName, twoImages, threeImages) => {
      const metadata = {
        contentType: 'image/jpeg'
      }

      const uploadTask = storage.ref(`${refName}/${fileName}`).put(file, metadata)

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
        
        //progress function ...
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

        this.setState({
          [progressStateName]: progress
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
        storage.ref(`${refName}`).child(fileName).getDownloadURL().then(url => {
          this.setState({
            [urlStateName]: url,
            [fileStateName]: fileName
          })
        }).then(() => {
          if (!this.state.twoImages && !this.state.threeImages) {
            this.setState({ done: true })
          }

          if (this.state.done) {
            this.props.createProject(this.state)
            this.setState({
              done: false
            })
          }

          if(this.state.thirdImageDone) {
            this.handleImageUpload(this.fileInputTwo.current.files[0], 'logoImages', this.fileInputTwo.current.files[0].name, 'progressLogo', 'urlLogo', 'fileNameLogo', this.state.twoImages, this.state.threeImages)
            this.setState({
              threeImages: false,
              twoImages: false,
              thirdImageDone: false,
              done: true
            })
          }

          if(this.state.threeImages) {
              this.handleImageUpload(this.fileInputThree.current.files[0], 'bannerImages', this.fileInputThree.current.files[0].name, 'progressBanner', 'urlBanner', 'fileNameBanner', this.state.twoImages, this.state.threeImages)
              this.setState({
                thirdImageDone: true
              })
            }

          if (this.state.twoImages && !this.state.threeImages) {
            this.handleImageUpload(this.fileInputTwo.current.files[0], 'logoImages', this.fileInputTwo.current.files[0].name, 'progressLogo', 'urlLogo', 'fileNameLogo', this.state.twoImages, this.state.threeImages)
            this.setState({
              twoImages: false,
              done: true
            })
          }
        })
      }
    )
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
     } else if (this.fileInput.current.files[0] && !this.fileInputTwo.current.files[0] && !this.fileInputThree.current.files[0]) {
       // upload of background image 
       this.handleImageUpload(this.fileInput.current.files[0], 'backgroundImages', this.fileInput.current.files[0].name, 'progressBackground', 'urlBackground', 'fileNameBackground', this.state.twoImages, this.state.threeImages)

     } else if (this.fileInput.current.files[0] && this.fileInputTwo.current.files[0] && !this.fileInputThree.current.files[0]) {
        // upload of background image and logo image
        this.setState({
          twoImages: true
        })

        this.handleImageUpload(this.fileInput.current.files[0], 'backgroundImages', this.fileInput.current.files[0].name, 'progressBackground', 'urlBackground', 'fileNameBackground', this.state.twoImages, this.state.threeImages)
     } else {
       // upload of background image, logo image, and banner image
      this.setState({
        twoImages: true,
        threeImages: true
      })

      this.handleImageUpload(this.fileInput.current.files[0], 'backgroundImages', this.fileInput.current.files[0].name, 'progressBackground', 'urlBackground', 'fileNameBackground', this.state.twoImages, this.state.threeImages)
     }
  }

  render() {
    const { auth, darkmode } = this.props;
    if (!auth.uid) {
      return <Redirect to='/sign-in' />
    }

    if (!darkmode) {

      return (
        <div className='create-project__container'>
          <form onSubmit={this.handleSubmit}>
            <div className='create-project__input'>
              <input type='text' id='title' placeholder='Title' onChange={this.handleChange} />
            </div>
  
            <div className='create-project__input'>
              <input type='text' id='shortContent' placeholder='Short Description' onChange={this.handleChange} />
            </div>
  
            <div className='create-project__input'>
              <input type='text' id='content' placeholder='Content' onChange={this.handleChange} />
            </div>
  
            <div className='create-project__input'>
              <input type='text' id='websiteLink' placeholder='Website Link' onChange={this.handleChange} />
            </div>
  
            <div className='create-project__input'>
              <input type='text' id='githubLink' placeholder='Github Link' onChange={this.handleChange} />
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
  
            <div className='create-project__input'>
              <input type='file' id='bannerImage' ref={this.fileInputThree} placeholder='Upload Banner Image' onChange={this.handleChange} />
            </div>
  
            <div className="progress">
                <progress value={this.state.progressBanner} max="100" />
            </div>
  
            <div className='create-project__button'>
              <button>Create Project</button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className='create-project__container dark-create-project__container'>
          <form onSubmit={this.handleSubmit}>
            <div className='create-project__input'>
              <input type='text' id='title' placeholder='Title' onChange={this.handleChange} />
            </div>
  
            <div className='create-project__input'>
              <input type='text' id='shortContent' placeholder='Short Description' onChange={this.handleChange} />
            </div>
  
            <div className='create-project__input'>
              <input type='text' id='content' placeholder='Content' onChange={this.handleChange} />
            </div>
  
            <div className='create-project__input'>
              <input type='text' id='websiteLink' placeholder='Website Link' onChange={this.handleChange} />
            </div>
  
            <div className='create-project__input'>
              <input type='text' id='githubLink' placeholder='Github Link' onChange={this.handleChange} />
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
  
            <div className='create-project__input'>
              <input type='file' id='bannerImage' ref={this.fileInputThree} placeholder='Upload Banner Image' onChange={this.handleChange} />
            </div>
  
            <div className="progress">
                <progress value={this.state.progressBanner} max="100" />
            </div>
  
            <div className='create-project__button'>
              <button>Create Project</button>
            </div>
          </form>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    darkmode: state.darkmode.darkmode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)