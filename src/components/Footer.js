import React from 'react';
import './Footer.css';
import Logo from '../img/site-logo.svg';

function Footer() {
  return (
    <div className='footer'>
        <img src={Logo} />
        <p>@ 2015 Tatvasoft.com. All right resived</p>
    </div>
  )
}

export default Footer