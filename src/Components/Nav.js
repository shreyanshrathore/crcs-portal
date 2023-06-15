import React from 'react'
import './Nav.css'
import img1 from '../images/nav-image-1.png'
import img2 from '../images/nav-image-2.png'

const Nav = () => {
  return (
    <div className='parent'>
      <div className="image1">
        <img  src={img1} alt="" />
      </div>
        <div className="headings">
            <h1>	
                MULTI-STATE CO-OPERATIVE SOCIETIES
            </h1>
            <h3>
                Ministry of Cooperation, Govt. of India
            </h3>
        </div>
        <div className="image2">
        <img  src={img2} alt="" />
        </div>
    </div>
  )
}

export default Nav