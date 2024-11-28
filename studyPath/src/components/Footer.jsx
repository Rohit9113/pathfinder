import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      id="main"
      className="max-w-screen h-[20vh] bg-black text-white flex justify-around items-center flex-wrap mt-5">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About Us</Link>
      <Link to="/Academics" className="hover:underline">Recommendations</Link>
      <Link to="/contact" className="hover:underline">Contact Us</Link>
      <Link to="#faq" className="hover:underline">FAQs</Link>
    </div>
  )
}

export default Footer

