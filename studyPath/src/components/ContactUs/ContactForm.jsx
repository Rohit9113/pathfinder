import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/contacts", formData);
      setResponse(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponse("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-form w-full bg-slate-400 py-6 md:py-10">
      <p className="text-center font-cormorant text-2xl md:text-5xl font-bold underline">
        Contact Us
      </p>
      <div className="bg-slate-700 h-auto md:h-[70%] md:w-[50%] mx-auto mt-6 md:mt-10 rounded-3xl p-6">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="font-cormorant text-lg text-white">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="off" placeholder="Enter Your Name" required className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="font-cormorant text-lg text-white">Email: </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off" required placeholder="Enter Your Email" className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="font-cormorant text-lg text-white"> Message: </label>
            <textarea name="message" value={formData.message} onChange={handleChange} autoComplete="off" placeholder="Enter Your Message" required className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <button type="submit" className="font-cormorant w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" >
            Submit
          </button>
        </form>

        {response && <p className="mt-4 text-center text-white">{response}</p>}
      </div>
    </div>
  );
}

export default ContactForm;
