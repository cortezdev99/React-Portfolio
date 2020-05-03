const initState = {
  showNav: false
}

const navReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return {
        showNav: !state.showNav
      }
    default:
      return {
        ...state
      }
  }
}

export default navReducer