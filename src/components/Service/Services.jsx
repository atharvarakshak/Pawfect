import React from 'react'
import i1 from "../../assets/i1.svg"
import i2 from "../../assets/i2.svg"
import i3 from "../../assets/i3.svg"
import i4 from "../../assets/i4.svg"
import i5 from "../../assets/i5.svg"
import i6 from "../../assets/i6.svg"
function Services() {
  return (
    <div className=' flex md:flex-col border-2 border-gray-300 mx-auto rounded-lg shadow-lg justify-center w-[40%] '>
    
    <div className='flex flex-col md:flex-row justify-evenly'>
        <img className='h-50 w-50' src={i1} alt="" />
        <img className='h-50 w-50' src={i2} alt="" />
        <img className='h-50 w-50' src={i3} alt="" />
    </div>
    <div className='flex flex-col md:flex-row justify-evenly'>
        <img className='h-50 w-50' src={i4} alt="" />
        <img className='h-50 w-50' src={i5} alt="" />
        <img className='h-50 w-50' src={i6} alt="" />
    </div>
</div>

  )
}

export default Services
