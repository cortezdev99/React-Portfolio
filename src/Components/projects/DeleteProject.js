import React, { Component } from 'react'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'


class DeleteJuice extends Component {
  render() {
    const { project } = this.props
    const handleDeleteDoc = (project) => {
      const firestore = getFirestore()
      const firebase = getFirebase()
      const storage = firebase.storage()
      const storageRef = storage.ref()
      const imagesRef = storageRef.child('juiceImages')
      const condition = "" || null || undefined || false

      if (project.fileNameBackground === condition) {
        firestore.collection("projects").doc(`${project.id}`).delete().then(() => {
          console.log('successfully deleted')
        }).catch((err) => {
          console.log(err)
        })
      } else if (project.fileNameBackground !== condition && project.fileNameBanner === condition && project.fileNameLogo === condition) {
        imagesRef.child(`${project.fileNameBackground}`).delete().then(() => {
          firestore.collection("projects").doc(`${project.id}`).delete().then(() => {
            console.log('successfully deleted')
          }).catch((err) => {
            console.log(err)
          })
        }).catch((err) => {
          console.log(err)
        })
      } else if (project.fileNameBackground !== condition && project.fileNameBanner !== condition && project.fileNameLogo === condition) {
        imagesRef.child(`${project.fileNameBackground}`).delete().then(() => {
          imagesRef.child(`${project.fileNameLogo}`).delete().then(() => {
            firestore.collection("projects").doc(`${project.id}`).delete().then(() => {
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
        imagesRef.child(`${project.fileNameBackground}`).delete().then(() => {
          imagesRef.child(`${project.fileNameLogo}`).delete().then(() => {
            imagesRef.child(`${project.fileNameBanner}`).delete().then(() => {
              firestore.collection("projects").doc(`${project.id}`).delete().then(() => {
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

export default DeleteJuice