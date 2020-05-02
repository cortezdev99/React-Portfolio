import React, { Component } from 'react'
import { connect } from 'react-redux'

import bannerImage from '../../images/aboutpageImages/person-wearing-red-hoodie-1097456.jpg'
import brightBannerImage from '../../images/aboutpageImages/lightBanner.jpg'
import headshotImage from '../../images/aboutpageImages/headshot0627.jpg'

class About extends Component {
  render() {
    const { darkmode } = this.props

    if (!darkmode) {
      return (
        <div className='about-container'>
    
          <div className='about-container__banner-image' style={{backgroundImage: "url(" + brightBannerImage + ")"}} />
    
          <div className='about-container__header'>
            <div className='line'>About Me</div>
          </div>
    
          <div className='about-container__main-content'>
            <div className='about-container__headshot-image' style={{backgroundImage: "url(" + headshotImage + ")"}} />
    
            <div className='about-container__content'>
              Yes, that is my smolder... and it's even better in person. I just finished schooling at Bottega studying FullStack Web Development. I have WAY to much free time on my hands, and I'm using it to study new programming languages as well as continuing to 'season' my skills. I would love to get some of my free time taken off of my hands by a company with a good sense of humor. Connect with my on Linked In or shoot me an email if you could be that company! Thank you for spending time to go through my page.
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='about-container dark-about-container'>
    
          <div className='about-container__banner-image' style={{backgroundImage: "url(" + bannerImage + ")"}} />
    
          <div className='about-container__header dark-about-container__header'>
            <div className='line'>About Me</div>
          </div>
    
          <div className='about-container__main-content dark-about-container__main-content'>
            <div className='about-container__headshot-image' style={{backgroundImage: "url(" + headshotImage + ")"}} />
    
            <div className='about-container__content dark-about-container__content'>
              Yes, that is my smolder... and it's even better in person. I just finished schooling at Bottega studying FullStack Web Development. I have WAY to much free time on my hands, and I'm using it to study new programming languages as well as continuing to 'season' my skills. I would love to get some of my free time taken off of my hands by a company with a good sense of humor. Connect with my on Linked In or shoot me an email if you could be that company! Thank you for spending time to go through my page.
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    darkmode: state.darkmode.darkmode
  }
}

export default connect(mapStateToProps)(About)
