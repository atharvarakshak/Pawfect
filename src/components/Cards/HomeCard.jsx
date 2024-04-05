import React from 'react'
import big from '../../assets/Frame5.svg'
import sub from '../../assets/Frame4.svg'

function HomeCard() {
  return (
    <div className=' '>
       <img src={big} alt="" className="mx-auto" />
       <img src={sub} alt="" className="relative bottom-[355px]  mx-auto" />
    </div>
    
  )
}

export default HomeCard