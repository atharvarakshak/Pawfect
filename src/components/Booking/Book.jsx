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

           <a href="#_" class="relative inline-flex items-center  text-center py-5 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
</a>
        </div>
    </div>
  )
}

export default Book