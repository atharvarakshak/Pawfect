import React from "react";

import { useNavigate, Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    email: "",
    service: "",
    message: "",
  });

  const [feedbackDisplay, setFeedbackDisplay] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/displayfeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response);

    setFeedbackDisplay(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: feedback.email,
          service: feedback.service,
          message: feedback.message,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("enter valid credentials");
      } else {
        setFeedback({ email: "", service: "", message: "" });
        alert("Thank you for your valuable feedback !");
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
  };
  const onChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative top-6 border-2 border-black md:flex  items-center  ">
      <form
        className="bg-[#fccea4] flex flex-col gap-9 lg:w-[40%]  m-auto rounded-2xl p-10 mt-32"
        onSubmit={submit}
      >
        <input
          type="email"
          name="email"
          value={feedback.email}
          onChange={onChange}
          className="p-2 rounded-lg"
          placeholder="Your Email"
          required
        />
        <select
          name="service"
          value={feedback.service}
          onChange={onChange}
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
          value={feedback.message}
          onChange={onChange}
          className="p-2 rounded-lg"
          placeholder="Give Us your valuable Feedback !"
          required
        ></textarea>
        <button
          type="submit"
          className="p-2 rounded-lg bg-red-500 text-white font-medium"
        >
          Submit
        </button>
      </form>

      <div className="bg-[#fccea4] flex flex-col gap-9 lg:w-[40%]  m-auto rounded-2xl p-10 mt-32 mr-8 ml-4 mb-4  justify-start">
        <h2 className="font-bold text-xl">Customer Feedbacks</h2>

        <div className="border-2 border-white max-h-100 overflow-y-auto">
          {feedbackDisplay.length !== 0 ? (
            feedbackDisplay.map((data) => {
              return (
                <div className="flex-col ">
                  <ol>
                    <li>
                      <div className="flex justify-between border-2 border-white ">
                        <div key={data._id}>{data.service}</div> <div></div>{" "}
                        <div>{data.message}</div>
                        <hr className="bg-white" />
                      </div>
                    </li>
                  </ol>
                </div>
              );
            })
          ) : (
            <div>********</div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Feedback;
