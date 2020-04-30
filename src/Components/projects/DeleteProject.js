import React, { Component } from 'react'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'


class DeleteProject extends Component {
  render() {
    const { project, id } = this.props
    const handleDeleteDoc = (project) => {
      const firestore = getFirestore()
      const firebase = getFirebase()
      const storage = firebase.storage()
      const storageRef = storage.ref()
      const imagesBackgroundRef = storageRef.child('backgroundImages')
      const imagesLogoRef = storageRef.child('logoImages')
      const imagesBannerRef = storageRef.child('bannerImages')

      if (project.fileNameBackground === '' || undefined || false || null) {
        firestore.collection("projects").doc(`${id}`).delete().then(() => {
          console.log('successfully deleted')
        }).catch((err) => {
          console.log(err)
        })
      } else if (project.fileNameBackground !== '' && project.fileNameBanner === '' && project.fileNameLogo === '') {
        imagesBackgroundRef.child(`${project.fileNameBackground}`).delete().then(() => {
          firestore.collection("projects").doc(`${id}`).delete().then(() => {
            console.log('successfully deleted')
          }).catch((err) => {
            console.log(err)
          })
        }).catch((err) => {
          console.log(err)
        })
      } else if (project.fileNameBackground !== '' && project.fileNameBanner !== '' && project.fileNameLogo === '') {
        imagesBackgroundRef.child(`${project.fileNameBackground}`).delete().then(() => {
          imagesLogoRef.child(`${project.fileNameLogo}`).delete().then(() => {
            firestore.collection("projects").doc(`${id}`).delete().then(() => {
              console.log('successfully deleted')
            }).catch((err) => {
              console.log(err)
            })
          }).catch((err) => {
            console.log(err)
          })
        }).catch((err) => {
          console.log(err)
        })
      } else {
        imagesBackgroundRef.child(`${project.fileNameBackground}`).delete().then(() => {
          imagesLogoRef.child(`${project.fileNameLogo}`).delete().then(() => {
            imagesBannerRef.child(`${project.fileNameBanner}`).delete().then(() => {
              firestore.collection("projects").doc(`${id}`).delete().then(() => {
                console.log('successfully deleted')
              }).catch((err) => {
                console.log(err)
              })
            }).catch((err) => {
              console.log(err)
            })
          }).catch((err) => {
            console.log(err)
          })
        }).catch((err) => {
          console.log(err)
        })
      }
    }

    return (
      <div className="delete">
        <button onClick={() => handleDeleteDoc(project)}>Delete</button>
      </div>
    )
  }
}

export default DeleteProject