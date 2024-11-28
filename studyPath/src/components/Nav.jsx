import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Nav = () => 
{
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => 
  {
    const handleScroll = () => 
    {
      if(window.scrollY > 200)
      {
        setIsScrolled(true);
      }
      else
      {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => 
    {
      window.removeEventListener('scroll', handleScroll);
    };
  }, 
  []);

  const handleMenuToggle = () => 
  {
    setIsMenuOpen(!isMenuOpen);
  };

// const toggleDarkMode = () => {
//   setIsDarkMode(!isDarkMode);
// };
const [isMenuOpen, setIsMenuOpen] = useState(false);
// const [isDarkMode, setIsDarkMode] = useState(false);
// const handleMenuToggle = () => {
//   setIsMenuOpen(!isMenuOpen);
// };

// const toggleDarkMode = () => {
//   setIsDarkMode(!isDarkMode);
// };
  return (
    <div 
    id='main'
    className=''>

<div 
  id='nav'
  className={`w-full max-w-full h-[15vh] md:h-[15vh] flex justify-between items-center px-4 md:px-8 fixed ${isScrolled ? 'bg-black' : 'bg-transparent'}`}
>


{/* 'w-screen h-[15vh] md:h-[15vh] flex justify-between items-center px-4 md:px-8 fixed bg-transpa' */}
        
        <div
        id='logo'>
          <h1 className={`text-sm font-mono px-4 py-2 border-2 
          ${isScrolled ? 'text-white border-white' : 'text-black border-black'}`}>
          StudyPathFinder.</h1>

        </div>

        <div 
        id="infoPanel"
        className={`w-[50%] h-[50%] justify-around items-center rounded-full hidden md:flex border-2 
          ${isScrolled ? 'text-white border-white' : 'text-black border-black'}`}>
          <a href="/" className='hover:underline'>Home</a>
          <a href="" className='hover:underline'>About Us</a>
          <a href="" className='hover:underline'>Our Services</a>
          <a href="" className='hover:underline'>Contact Us</a>
        </div>

        <div 
        id="account"
        className={`w-[20%] h-[50%] border-2 justify-around items-center rounded-full hidden md:flex 
        ${isScrolled ? 'text-white border-white' : 'text-black border-black'}`}>
          <Link to="/login" className='hover:underline'>Log-in</Link>
          <Link to="/signin" className='hover:underline'>Sign-up</Link>
        </div>

        <button
        className='text-white md:hidden'
        onClick={handleMenuToggle}>
          <i class="fa-solid fa-bars fa-lg"></i>
        </button>

        {/* <button
          className={`ml-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-orange-400 text-black'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}
      </div>
    

    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white p-4 fixed top-[15vh] w-full`}>
      <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full'>Home</a>
      <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full'>About Us</a>
      <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full'>Our Services</a>
      <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full'>Contact Us</a>

      <div>
        <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full'>Login</a>
        <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full'>Sign Up</a>
      </div>
    </div>
  </div>

  )
}

export default Nav