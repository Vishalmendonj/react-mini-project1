import React from 'react'
import H_vector from './H_vector';
import H_heading from './H_heading';
import H_para from './H_para';
import H_tagline from './H_tagline';
import H_input from './H_input';
import H_alert from './H_alert';
import './Header.css'
const Header = () => {
  return (
    <div className='h_main-container'>
      <div className='left-container'>
        <H_heading/>
        <H_para/>
        <H_tagline/>
        <H_input/>
        <H_alert/>
      </div>
      <div className='right-container'>
        <H_vector/>
      </div>
    </div>
  )
}

export default Header
