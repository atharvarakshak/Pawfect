import React from 'react'

const Feedback = () => {
  return (
   
    <div className='relative top-16'>
      
      <p className="">Tell Us what you feel</p>

      <form className="bg-[#fccea4] flex flex-col gap-9 lg:w-[578px] lg:h-[544px] m-auto rounded-2xl p-10 mt-32" >
           <input type="full Name" className=" p-2 rounded-lg" placeholder='Your email'/>
           
           <select className="p-2 rounded-lg"  >
          <option value="">Select a service</option>
          <option value="Day Care">Day Care</option>
          <option value="Grooming">Grooming</option>
          <option value="Pet Training">Pet Training</option>
          <option value="Veterinary Assistance">Veterinary Assistance</option>
          <option value="Walking">Walking</option>
          <option value="Breeding Assistance">Breeding Assistance</option>
          </select>
          
          <textarea name="" id="" cols="30" rows="10" className='p-2'  placeholder='Give Us your valuable Feedback !'></textarea>


           <a href="#_" class="relative inline-flex items-center  text-center py-5 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 text-center  h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Submit</span>
          </a>
          </form>
     
   </div>

  )
}

export default Feedback