import React from 'react'
import AboutStory from '../../Sections/About/AboutStory/AboutStory'
import AboutServices from '../../Sections/About/AboutServices/AboutServices'

const About = () => {
  return (
    <div className='px-4 About-Container'>
      <AboutStory/>
      <AboutServices/>
    </div>
  )
}

export default About