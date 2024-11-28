import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black w-full md:h-96 '>
<div className='text-white flex justify-between md:m-10 md:p-10 m-5 '>
<div className='w-1/3 hidden md:block'>
  {/* company name */}
  <h1 className='text-4xl font-bold '>StudyPathFinder.</h1>
  <h3 className='pt-10 text-gray-100 opacity-55 '>Study Path Finder: Your ultimate guide to curated learning paths from top platforms like W3Schools, GeeksforGeeks, and more Empowering learners with tailored resources, expert-recommended platforms, and structured paths to achieve their career and academic goals</h3>
</div>
<div className=" ">
<h1 className='md:text-4xl font-bold '>Useful Links</h1>

    <ul className='flex flex-col md:text-2xl md:leading-10 font-semibold md:pt-10 pt-4'>
    <Link    to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About Us</Link>
      <Link to="/ourServices" className="hover:underline">Our Services</Link>
      <Link to="/contact" className="hover:underline">Contact Us</Link>
    </ul>
</div>

<div >
<h1 className='md:text-4xl font-bold '>Contact</h1>
  {/* contact link */}
  <div className='flex flex-col md:pt-10 pt-4 text-2xl  md:leading-10'> 
   <i class="fa-solid fa-house "><span className='md:text-lg p-2 text-sm font-sans  md:leading-10'>New Delhi </span></i>
  <i class="fa-regular fa-envelope"><span className='md:text-lg text-sm p-2 font-sans md:leading-10'>Exam@gmail.com</span></i>

  <i class="fa-solid fa-phone"><span className='md:text-lg text-sm p-2 font-sans md:leading-10'>915262878</span></i>
  <i class="fa-solid fa-fax"><span className='md:text-lg  text-sm p-2 font-sans md:leading-10'>05568-28</span></i>
</div>

</div>
</div>

<hr className=' md:-mt-10 md:m-10 m-5 '></hr>
<div className='text-white flex justify-end gap-10 mr-20 text-2xl -mt-5'>
<Link t="#"><i class="fa-brands fa-facebook"></i></Link>




<Link t="#"><i class="fa-brands fa-twitter"></i></Link>
<Link t="#"><i class="fa-brands fa-linkedin"></i> </Link>

<Link t="#"><i class="fa-brands fa-github"></i></Link>
</div>
      </div>
  )
}

export default Footer

