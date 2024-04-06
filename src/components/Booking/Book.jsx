import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!isLoggedIn) { // Check if the user is logged in
        alert("Please log in to proceed."); // Alert the user to log in
        return; // Stop further execution
      }
      
      const response = await axios.post("http://localhost:3001/", {
        name,
        addr,
        phone,
        service
      });
      
      if (response.data === "exist") {
        alert("Your order is placed successfully!");
        history("/", { state: { id: service } });
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
  };

  return (
<<<<<<< HEAD
    <div className='relative top-16 mb-24'>
=======
    <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 92cbb7e8da3ddaee111f96dccf5002582af2b804
      <form className="bg-[#fccea4] flex flex-col gap-9 lg:w-[578px] lg:h-[544px] m-auto rounded-2xl p-10 mt-32" onSubmit={submit}>
        <p className="text-center font-bold text-3xl ">Book an appointment !</p>
        <input type="full Name" className="p-2 rounded-lg" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="full Name" className="p-2 rounded-lg" placeholder='Address' value={addr} onChange={(e) => setAddr(e.target.value)} />
        <input type="full Name" className="p-2 rounded-lg" placeholder='Phone No.' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <select className="p-2 rounded-lg" value={service} onChange={(e) => setService(e.target.value)}>
<<<<<<< HEAD
=======
=======
>>>>>>> 92cbb7e8da3ddaee111f96dccf5002582af2b804
      
        <form className="bg-[#fccea4] flex flex-col gap-9 lg:w-[578px] lg:h-[544px] m-auto rounded-2xl p-10 mt-32" onSubmit={submit}>
           <p className="text-center font-bold text-3xl ">Book an appointment !</p>
           <input type="full Name" className=" p-2 rounded-lg" placeholder='Full Name'/>
           <input type="full Name" className="p-2 rounded-lg" placeholder='Address'/>
           <input type="full Name" className="p-2 rounded-lg" placeholder='Phone No.'/>
           <select className="p-2 rounded-lg" value={service} onChange={(e) => setService(e.target.value)}>
>>>>>>> b183e0a8fbf9203590042fb9df93f1deaee34701
>>>>>>> 92cbb7e8da3ddaee111f96dccf5002582af2b804
          <option value="">Select a service</option>
          <option value="Day Care">Day Care</option>
          <option value="Grooming">Grooming</option>
          <option value="Pet Training">Pet Training</option>
          <option value="Veterinary Assistance">Veterinary Assistance</option>
          <option value="Walking">Walking</option>
          <option value="Breeding Assistance">Breeding Assistance</option>
        </select>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div className="text-xl flex mx-5 justify-between">
          <p className="">Estimated Cost:</p>
          <p className="">Rs:</p>
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl">
          Book Now
        </button>
      </form>
    </div>
=======
>>>>>>> 92cbb7e8da3ddaee111f96dccf5002582af2b804

           <div className="text-xl flex mx-5 justify-between">
            <p className="">Estimated Cost:</p>
            <p className="">Rs:</p>
           </div>

           <a href="#_" class="relative inline-flex items-center  text-center py-5 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span class="absolute bottom-0 text-center  h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
          </a>
          </form>
      </div>
<<<<<<< HEAD
=======
        <div className="text-xl flex mx-5 justify-between">
          <p className="">Estimated Cost:</p>
          <p className="">Rs:</p>
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl">
          Book Now
        </button>
      </form>
    </div>
>>>>>>> 68f4fdb (update)
=======
>>>>>>> b183e0a8fbf9203590042fb9df93f1deaee34701
>>>>>>> 92cbb7e8da3ddaee111f96dccf5002582af2b804
  )
}

export default Book;
