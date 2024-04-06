import React, { useState } from 'react';
import './PaymentOptions.css';
import logo from "../../assets/qr.jpg"
import './PaymentOption.js';
const Book = () => {
  const [services, setServices] = useState([
    { name: 'Day Care', price: 599, checked: false },
    { name: 'Grooming', price: 549, checked: false },
    { name: 'Pet Training', price: 799, checked: false },
    { name: 'Veterinary Assistance', price: 1199, checked: false },
    { name: 'Walking', price: 399, checked: false },
    { name: 'Breeding Assistance', price: 699, checked: false }
  ]);
  const [totalCost, setTotalCost] = useState(0);
  const [showPaymentOverlay, setShowPaymentOverlay] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedServices = [...services];
    updatedServices[index].checked = !updatedServices[index].checked;
    setServices(updatedServices);
    calculateTotal(updatedServices);
  };

  const calculateTotal = (updatedServices) => {
    let total = 0;
    updatedServices.forEach(service => {
      if (service.checked) {
        total += service.price;
      }
    });
    setTotalCost(total);
  };

  const submit = async (e) => {
    e.preventDefault();
    setShowPaymentOverlay(true);
    console.log('Form submitted...');
  };

  return (
    
    <div>
      <div id="popup" className={`payment-overlay ${showPaymentOverlay ? 'visible' : ''}`}>
      <div className="payment">
      <p className="text-center font-bold text-3xl ">Choose Payment Option</p>
        <div className="option1">
          <div className="name">
            <button id="toggleButton" className="box"></button>
            <div className="option">Option 1 - PayTm / PhonePay / G-Pay</div>
          </div>
          <div className="qr">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="option2">
        <div className="name">
            <button id="toggleButton" className="box"></button>
            <p className="option">Option 2 - Pay After Service (PAS)</p>
          </div>
          <div className="buttons"></div>
        </div>
      </div>
      </div>
      <form className="form bg-[#fccea4] flex flex-col gap-9 lg:w-[578px]  m-auto rounded-2xl p-10 mt-32" onSubmit={submit}>
        <p className="text-center font-bold text-3xl ">Book an appointment !</p>
        <input type="text" className="p-2 rounded-lg" placeholder='Full Name'/>
        <input type="text" className="p-2 rounded-lg" placeholder='Address'/>
        <input type="text" className="p-2 rounded-lg" placeholder='Phone No.'/>

        {services.map((service, index) => (
        
          <div key={index} onChange={() => handleCheckboxChange(index)} className='bg-red-900/50 p-2 text-white'>
            <input
              type="checkbox"
              name={service.name}
              checked={service.checked}
              className='w-8'
            />
            
            <label>{service.name} - Rs: {service.price}</label>
          </div>
        ))}
        <div className="text-xl flex mx-5 justify-between">
          <p className="">Estimated Cost:</p>
          <p className="">Rs: {totalCost}</p>
        </div>
        <button type="submit" className="relative inline-flex items-center text-center py-5 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Book Service</span>
        </button>
      </form>
    </div>
  );
};

export default Book;
