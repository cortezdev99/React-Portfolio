import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import bannerImage from '../../images/contactpageImages/contactpageBanner2.jpg'

const Contact = () => {
  return (
    <div className='contact-container'>

      <div className='contact-container__banner-image' style={{backgroundImage: "url(" + bannerImage + ")"}} />

      <div className='contact-container__header'>
        <div className='line'>Contact</div>
      </div>

      <div className='contact-container__main-content'>
        <div className='contact-container__bullet-points'>
          <div className='icon'><FontAwesomeIcon icon="envelope" /></div>
          <div className='contact-container__bullet-point'>Email</div>
        </div>

        <div className='contact-container__bullet-points'>
          <div className='icon'><FontAwesomeIcon icon="phone" /></div>
          <div className='contact-container__bullet-point'>Phone</div>
        </div>

        <div className='contact-container__bullet-points'>
          <div className='icon'><FontAwesomeIcon icon="map-marked-alt" /></div>
          <div className='contact-container__bullet-point'>Location</div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact