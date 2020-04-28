export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', payload: project })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err})
    })
  }
}

export const filterProjects = (_id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    var filteredProjects = [];
    const firestore = getFirestore();
    firestore.collection('projects').get().then((snapshot) => {
      snapshot.forEach(doc => {
        const projects = [];
        projects.push(doc.data())
        projects.map(project => {
          project.belongsTo.map(categoryId => {
            if (categoryId === _id) {
              filteredProjects.push(project)
              dispatch({ type: 'FILTER_PROJECTS_WITH_CATEGORY_ID', payload: filteredProjects})
            } else {
              return filterProjects
            }
            return null
          })
          return null
        })
      })
    })
  }
}