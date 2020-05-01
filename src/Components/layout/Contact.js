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
        <div className='contact-container__bullet-points contact-container__email'>
          <div className='contact-container__shortan-width'>
            <div className='icon'><FontAwesomeIcon icon="envelope" /></div>
            <div className='contact-container__bullet-point'>CortezDevelopement@gmail.com</div>
          </div>
        </div>

        <div className='contact-container__bullet-points contact-container__phone'>
          <div className='contact-container__shortan-width'>
            <div className='icon'><FontAwesomeIcon icon="phone" /></div>
            <div className='contact-container__bullet-point'>801-259-4056</div>
          </div>
        </div>

        <div className='contact-container__bullet-points contact-container__location'>
          <div className='contact-container__shortan-width'>
            <div className='icon'><FontAwesomeIcon icon="map-marked-alt" /></div>
            <div className='contact-container__bullet-point'>West Jordan, UT</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact