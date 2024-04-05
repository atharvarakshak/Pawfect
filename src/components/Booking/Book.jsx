import React from 'react'

const Book = () => {
  return (
    <div>
        <div className="bg-orange-300 flex flex-col gap-9 lg:w-[578px] lg:h-[544px] m-auto mt-8 rounded-2xl p-10">
           <p className="text-center font-bold text-3xl ">Book an appointment !</p>
           <input type="full Name" className=" p-2 rounded-lg" placeholder='Full Name'/>
           <input type="full Name" className="p-2 rounded-lg" placeholder='Address'/>
           <input type="full Name" className="p-2 rounded-lg" placeholder='Phone No.'/>
           <input type="full Name" className="p-2 rounded-lg" placeholder='selected service'/>

           <div className="">
            <p className="">Estimated Cost:</p>
            <p className=""></p>
           </div>
        </div>
    </div>
  )
}

export default Book