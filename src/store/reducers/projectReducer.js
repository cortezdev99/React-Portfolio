const initState = {
  projects: [
    {id: '1', title: 'World of Vapes', content: 'blah blah blah', link: 'http://something.com'},
    {id: '2', title: 'React Redux Practice', content: 'blah blah blah', link: 'http://somethingElse.com'},
    {id: '3', title: 'First Portfolio', content: 'blah blah blah', link: 'http://somethingElseElse.com'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err)
      return {
        ...state
      }
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}

export default projectReducer