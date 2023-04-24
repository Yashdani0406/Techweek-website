import React from 'react'
import './about.css'
import img2 from './img2.png'


function About() {
  return (
    <>
      <div className='about-body'>

        <div className='content'>

          <div className='block2'>
            <div className='text2'>
            <h1 className='header'>
              ABOUT
            </h1>
              <p className='para2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                 ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='img'>
              <img className='img2' src={img2} alt='logo2' />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default About
