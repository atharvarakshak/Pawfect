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
    <div>
      <form className="bg-[#fccea4] flex flex-col gap-9 lg:w-[578px] lg:h-[544px] m-auto rounded-2xl p-10 mt-32" onSubmit={submit}>
        <p className="text-center font-bold text-3xl ">Book an appointment !</p>
        <input type="full Name" className="p-2 rounded-lg" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="full Name" className="p-2 rounded-lg" placeholder='Address' value={addr} onChange={(e) => setAddr(e.target.value)} />
        <input type="full Name" className="p-2 rounded-lg" placeholder='Phone No.' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <select className="p-2 rounded-lg" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select a service</option>
          <option value="Day Care">Day Care</option>
          <option value="Grooming">Grooming</option>
          <option value="Pet Training">Pet Training</option>
          <option value="Veterinary Assistance">Veterinary Assistance</option>
          <option value="Walking">Walking</option>
          <option value="Breeding Assistance">Breeding Assistance</option>
        </select>
        <div className="text-xl flex mx-5 justify-between">
          <p className="">Estimated Cost:</p>
          <p className="">Rs:</p>
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl">
          Book Now
        </button>
      </form>
    </div>
  )
}

export default Book;
