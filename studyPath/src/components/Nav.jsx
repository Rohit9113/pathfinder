import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => 
  {
    const handleScroll = () => 
    {
      if(window.scrollY > 50)
      {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log('Stored User:', parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user:', error);
      }
    }

    if (token) {
      console.log('Token:', token);
    }
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    console.log('Logged out');
    navigate('/login');
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div 
    id='main'
    className=''>

<div 
  id='nav'
  className={`w-full max-w-full h-[15vh] md:h-[15vh] flex justify-between z-50 items-center px-4 md:px-8 fixed ${isScrolled ? 'bg-black' : 'bg-transparent'}`}
>


{/* 'w-screen h-[15vh] md:h-[15vh] flex justify-between items-center px-4 md:px-8 fixed bg-transpa' */}
        
        <div
        id='logo'>
          <Link to="/">
          <h1 className={`text-2xl font-mono
          ${isScrolled ? 'text-white border-white' : 'text-black border-black'}`}>
          StudyPathFinder<span className='animate-ping'>_</span></h1>
          </Link>
        </div>

        <div 
        id="infoPanel"
        className={`w-[50%] h-[50%] justify-around items-center rounded-full  hidden md:flex border-2 
          ${isScrolled ? 'text-white border-white' : 'text-black border-black rounded-full'}`}>
          <a href="/" className='hover:underline'>Home</a>
          <Link to="/about" className='hover:underline'>About Us</Link>
          <Link to="/Academics" className='hover:underline'>Recommendations</Link>
          <Link to="/contact" className='hover:underline'>Contact Us</Link>
          <a href="#faq" className='hover:underline'>FAQs</a>
        </div>

        <div id="account" className={`w-[20%] h-[50%] border-2 justify-around items-center rounded-full hidden md:flex ${isScrolled ? 'text-white border-white' : 'text-black border-black'}`}>
          {user ? (
            <>
              <span className="font-bold cursor-pointer" onClick={togglePopup}>
                {user.name}
              </span>
              <button onClick={handleLogout} className="font-bold hover:underline">
                Logout
              </button>
              {isPopupVisible && (
                <div className="absolute top-16 right-8 bg-white border border-gray-300 rounded-xl shadow-lg p-4 z-50" style={{ minWidth: '200px' }}>
                  <h3 className="font-bold mb-2">Welcome {user.name}!</h3>
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <button onClick={togglePopup} className="mt-4 bg-black text-white py-1 px-3 rounded hover:bg-red-600">
                    X
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline">Log-in</Link>
              <Link to="/signup" className="hover:underline">Sign-up</Link>
            </>
          )}
        </div>

        <button className="text-white md:hidden" onClick={handleMenuToggle}>
          <i className="fa-solid fa-bars fa-lg"></i>
        </button>
      </div>

    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} z-50 backdrop-blur p-4 fixed top-[15vh] w-full h-[100vh]`}>
      <Link to="/" className='flex text-lg mb-3 border-b border-black'>Home</Link>
      <Link to="/about" className='flex text-lg mb-3 border-b border-black'>About Us</Link>
      <Link to="/Academics" className='flex text-lg mb-3 border-b border-black '>Platforms</Link>
      <Link to="/contact" className='flex text-lg mb-3 border-b border-black '>Contact Us</Link>
      <a href="#faq" className='flex text-lg mb-3 border-b border-black '>FAQs</a>

        <div>
          {user ? (
            <>
              <span className="flex justify-center mb-1">{user.name}</span>
              <button onClick={handleLogout} className="flex justify-center border-2 border-white mb-1 rounded-full">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex justify-center border-2 border-white mb-1 rounded-full">Login</Link>
              <Link to="/signup" className="flex justify-center border-2 border-white mb-1 rounded-full">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
