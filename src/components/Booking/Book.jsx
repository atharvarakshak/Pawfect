import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/", {
        name,
        addr,
        phone,
        service
      });
      if (response.data === "exist") {
        history("/", { state: { id: email } });
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
        <p className="text-center font-bold text-3xl">Book an appointment!</p>
        <input type="text" className="p-2 rounded-lg" placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" className="p-2 rounded-lg" placeholder='Address' onChange={(e) => setAddr(e.target.value)} />
        <input type="text" className="p-2 rounded-lg" placeholder='Phone No.' onChange={(e) => setPhone(e.target.value)} />
       
        <div className="text-xl flex mx-5 justify-between">
          <p>Estimated Cost:</p>
          <p>Rs:</p>
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl">
          Book Now
        </button>
      </form>
    </div>
  )
}

export default Book;
