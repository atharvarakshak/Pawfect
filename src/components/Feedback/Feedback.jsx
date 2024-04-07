import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Feedback = () => {


  return (
    <div className="relative top-6">
      <p className="">Tell Us what you feel</p>
      <form
        className="bg-[#fccea4] flex flex-col gap-9 lg:w-[578px] lg:h-[544px] m-auto rounded-2xl p-10 mt-32"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded-lg"
          placeholder="Your Email"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          className="p-2 rounded-lg"
          placeholder="Give Us your valuable Feedback !"
          required
        ></textarea>
        <button type="submit" className="p-2 rounded-lg bg-red-500 text-white font-medium">
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Previous Feedbacks</h2>
        <ul>
          {feedbacks.map((feedback, index) => 
            <li key={index} className="mb-2">
              <p className="font-medium">{feedback.email}</p>
              <p>{feedback.message}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
