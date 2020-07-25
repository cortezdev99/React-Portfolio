export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project
    }).then((docRef) => {
        firestore.collection('projects').doc(docRef.id).set({
          ...project,
          docId: docRef.id
        }).then(() => {
          dispatch({ type: 'CREATE_PROJECT', payload: project })
        }).catch((err) => {
          console.log(err)
        })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err})
    })
  }
}

export const filterProjects = (_id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    var filteredProjects = [];
    const firestore = getFirestore();
    firestore.collection('projects').where('belongsTo', 'array-contains-any', [_id]).get().then((snapshot) => {
      if (!snapshot.empty) {
        snapshot.forEach(doc => {
          console.log(doc.data())
          filteredProjects.push(doc.data())
        })
        dispatch({ type: 'FILTER_PROJECTS_WITH_CATEGORY_ID', payload: filteredProjects })
      } else {
        console.log('Empty')
      }
    })
  }
}