import React, { Component } from 'react'

import image from '../../images/homepageImages/mountains.jpg'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <div className="homepage__image">

          {/* <img src={image} alt="mountains"/> */}
          <div className='image'style={{backgroundImage: "url(" + image + ")"}}>
            <div className="homepage__text typewriter-animation">
              Hello there, my name's Michael.
            </div>

            <div className="homepage__text__2 typewriter-animation__2">
              I'm a FullStack Software Developer.
            </div>
          </div>


        </div>


        <div className="homepage__heading">
          <div>Check out my projects!</div>
          <div className='line'></div>
        </div>

        <div className="homepage__project-filter">
          <div className='homepage__project-filter__all btn'>
            All
          </div>
          <div className='homepage__project-filter__react btn'>
            React
          </div>
          <div className='homepage__project-filter__firebase btn'>
            Firebase
          </div>
          <div className='homepage__project-filter__python btn'>
            Python
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
