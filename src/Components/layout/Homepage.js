import React, { Component } from 'react'

import image from '../../images/homepageImages/mountains.jpg'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <div className="homepage__image">
          <img src={image} alt="mountains"/>
        </div>

        <div className="homepage__heading">
          <div>Check out my projects!</div>
          <div className='line'></div>
        </div>
      </div>
    )
  }
}

export default Homepage
