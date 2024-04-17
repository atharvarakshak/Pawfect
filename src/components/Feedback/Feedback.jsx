import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Feedback = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <div className="relative top-6">
      <p className="">Tell Us what you feel</p>
      <form
        className="bg-[#fccea4] flex flex-col gap-9 lg:w-[578px] lg:h-[544px] m-auto rounded-2xl p-10 mt-32"
        
      >
        <input
          type="email"
          name="email"
          
          className="p-2 rounded-lg"
          placeholder="Your Email"
          required
        />
        <select
          name="service"
      
          className="p-2 rounded-lg"
          required
        >
          <option value="">Select a service</option>
          <option value="Day Care">Day Care</option>
          <option value="Grooming">Grooming</option>
          <option value="Pet Training">Pet Training</option>
          <option value="Veterinary Assistance">Veterinary Assistance</option>
          <option value="Walking">Walking</option>
          <option value="Breeding Assistance">Breeding Assistance</option>
        </select>
        <textarea
          name="message"
          
          className="p-2 rounded-lg"
          placeholder="Give Us your valuable Feedback !"
          required
        ></textarea>
        <button type="submit" className="p-2 rounded-lg bg-red-500 text-white font-medium">
          Submit
        </button>
      </form>

     
      
    </div>
  );
};

export default Feedback;
