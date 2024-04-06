import React from 'react'

const Book = () => {
  return (
    <div>
        <div className="bg-[#fccea4] flex flex-col gap-9 lg:w-[578px] lg:h-[544px] m-auto rounded-2xl p-10 mt-32">
           <p className="text-center font-bold text-3xl ">Book an appointment !</p>
           <input type="full Name" className=" p-2 rounded-lg" placeholder='Full Name'/>
           <input type="full Name" className="p-2 rounded-lg" placeholder='Address'/>
           <input type="full Name" className="p-2 rounded-lg" placeholder='Phone No.'/>
           <input type="full Name" className="p-2 rounded-lg" placeholder='selected service'/>

           <div className="text-xl flex mx-5 justify-between">
            <p className="">Estimated Cost:</p>
            <p className="">Rs:</p>
           </div>

           <a href="" className="">
            
           </a>
        </div>
    </div>
  )
}

export default Book