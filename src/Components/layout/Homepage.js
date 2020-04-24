import React, { Component } from 'react'

import image from '../../images/homepageImages/mountains.jpg'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <div className="homepage__image">
          <img src={image} alt="mountains"/>
        </div>

        
      </div>
    )
  }
}

export default Homepage
