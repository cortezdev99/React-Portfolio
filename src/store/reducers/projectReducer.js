const initState = {
  projects: [
    {id: '1', title: 'World of Vapes', content: 'blah blah blah', link: 'http://something.com'},
    {id: '2', title: 'React Redux Practice', content: 'blah blah blah', link: 'http://somethingElse.com'},
    {id: '3', title: 'First Portfolio', content: 'blah blah blah', link: 'http://somethingElseElse.com'}
  ],
  filteredProjects: []
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err)
      return {
        ...state
      }
    case 'CREATE_PROJECT':
      console.log('created project', action.payload)
      return {
        ...state,
        projects: action.payload
      }
    case 'FILTER_PROJECTS_WITH_CATEGORY_ID':
      console.log(action.payload)
      return {
        filteredProjects: action.payload
      }
      
    default:
      return {
        ...state
      }
  }
}

export default projectReducer