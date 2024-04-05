import React from 'react'
import ll from '../../assets/squares.svg'
import {Link, NavLink} from 'react-router-dom'

function RightImg({img,title,content,linked}) {
  return (
    <div class='mt-16'>
        <div className="flex justify-center items-center  max max-w-screen-lg m-auto gap-32 sm:flex-row  flex-col dark:text-slate-100">
            {/* left */}
            <div className="space-y-9  max-w-sm ">
            <h1 className="text-4xl font-bold text-center dark:text-orange-300 ">{title}</h1>
                <p className="md:text-2xl text-xl  text-center">{content}</p>
                <a href="#_" class="mx-auto  max-w-[126px]  realtive flex px-4 py-2 font-medium group bg-black dark:bg-orange-300 rounded-lg">
                <NavLink to={linked}>
                  <span class="relative  text-white  dark:text-slate-100">Enquire now</span>
                  </NavLink>
                </a>
            </div>

            {/* right */}
            <div className="">
             <img src={img} alt="" className="rounded-full" />
            </div>
        </div>
    </div>
  )
}

export default RightImg