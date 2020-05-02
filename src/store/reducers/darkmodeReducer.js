const initState = {
  darkmode: false
}

const darkmodeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        darkmode: !state.darkmode
      }
    default:
      return {
        ...state
      }
  }
}

export default darkmodeReducer