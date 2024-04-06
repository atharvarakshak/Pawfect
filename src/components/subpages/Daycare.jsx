import React from 'react'
import {NavLink, Link } from 'react-router-dom';
import LeftImg from '../Cards/LeftImg';
import dayCare2 from '../../assets/dayCare2.svg'
import dayCare22 from '../../assets/dayCare22.svg'

function Daycare() {
  return (
    <div  className='relative top-16' >  
      <LeftImg img={dayCare2} title="Day Care" content="We provide on demand day care services by ensuring safety of pet, which include playtime, bathroom breaks, and basic exercise. Offer leash training if needed and provide updates to owners." linked="/booking" btnText="Book Now" />
      
      {/* <img src={dayCare22} alt="" className=" hidden lg:block md:block " /> */}
    </div>
  )
}

export default Daycare