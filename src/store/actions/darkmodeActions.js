export const darkmodeToggle = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_DARKMODE' })
  }
}