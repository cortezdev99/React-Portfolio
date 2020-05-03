import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { showNavToggle } from '../../store/actions/showNavActions'

class Hamburger extends Component {
  render() {
    const { showNavToggle } = this.props
    return (
      <div className='hamburger-container' onClick={() => showNavToggle()}>
        <FontAwesomeIcon icon='bars' />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showNavToggle: () => dispatch(showNavToggle())
  }
}

export default connect(null, mapDispatchToProps)(Hamburger)
