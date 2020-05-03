export const showNavToggle = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_NAV' })
  }
}