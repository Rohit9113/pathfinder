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
    <div className="contact-form w-full  py-6 md:py-10">
     
      <div className="md:flex md:flex-row-reverse flex-col-reverse flex   md:w-[80%] bg-yellow-400  items-center md:m-auto gap-20 p-4  mt-12 md:mt-20 md:p-10 ">
      <div className="  md:h-[70%] md:w-[50%]   md:p-10 rounded-3xl ">
      
      <p className="text-center font-cormorant relative bottom-10 -mt-5 md:-mt-0 text-2xl md:text-5xl font-bold ">
        Contact Us
      </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col -mt-10 md:-mt-0">
          <div className="md:mb-4">
            <label htmlFor="name" className="font-cormorant text-lg  font-bold">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="off" placeholder="Enter Your Name" required 
            className="   mt-2 p-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="font-cormorant text-lg font-bold ">Email: </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off" required placeholder="Enter Your Email" 
            className="   mt-2 p-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div className="mb-4 ">
            <label htmlFor="message" className="font-cormorant text-lg  font-bold"> Message: </label>
            <textarea name="message" value={formData.message} onChange={handleChange} autoComplete="off" placeholder="Enter Your Message" required 
            className="   mt-2 p-5 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <button type="submit" className="font-cormorant w-full py-3 px-4 bg-black text-white font-semibold rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500" >
            Submit
          </button>
        </form>

        {response && <p className="mt-4 text-center text-white">{response}</p>}
      </div>

      <div className="md:w-1/2   ">
        <img  className="rounded-2xl bg-blue-950 md:w-full w-96 h-40 md:h-96"
        
        src="https://img.freepik.com/free-vector/call-center-design_24877-49643.jpg"/>
      </div>
     </div>
    </div>
  );
}

export default ContactForm;
