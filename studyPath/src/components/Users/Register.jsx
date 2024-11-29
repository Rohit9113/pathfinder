import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Nav from '../Nav';
import Footer from '../Footer';

const Signin = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setResponse("");
        try {
            const res = await axios.post('http://localhost:4000/api/signup/signup', formData);
            if (res.status === 201) {
                setResponse(res.data.message);
                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <>
            <Nav />
            <div className='max-w-screen-xl mx-auto flex flex-wrap py-60 md:py-20 items-center justify-center md:items-center md:justify-center'>
                <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='h-auto md:w-[45%] bg-cyan-200 md:h-[500px] rounded-3xl md:p-14 w-[90%]'>
                    <h3 className='sm:text-5xl m-auto text-center md:mb-2 font-bold'>
                        SIGN-UP
                    </h3 >
                    <p className='sm:text-xl text-center sm:mb-2 font-bold'>Enter Your Account Details To Sign-Up!</p>
                    <form onSubmit={handleSubmit} className='w-full sm:w-full md:mt-10 flex flex-col justify-center items-center'>
                        <div className='mb-1'>
                            <input type='text' name='name' value={formData.name} onChange={handleChange} autoComplete='off' placeholder='Enter Your Full Name' required className='mt-9 sm:mt-0 w-[300px] sm:p-3 px-2 py-2 text-sm md:w-[400px] rounded-full outline-indigo-500'/>
                        </div>

                        <div className='mb-1'>
                            <input type='email' name='email' value={formData.email} onChange={handleChange} autoComplete='off' required placeholder='Enter Your Email' className='mt-3 w-[300px] sm:p-3 px-2 py-2 text-sm md:w-[400px] rounded-full outline-indigo-500'/>
                        </div>

                        <div className='mb-1'>
                            <input  type='password' name='password' value={formData.password} onChange={handleChange} autoComplete='off' required placeholder='Enter Password' className='mt-3 w-[300px] sm:p-3 px-2 py-2 text-sm md:w-[400px] rounded-full outline-indigo-500'  />
                        </div>

                        <div className='mb-5'>
                            <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} autoComplete='off' required placeholder='Enter Confirm Password' className='mt-3 w-[300px] sm:p-3 px-2 py-2 text-sm md:w-[400px] rounded-full outline-indigo-500'/>
                        </div>

                        <button type='submit' className='w-[200px] mb-1 sm:w-[150px] py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700'>
                            Create Account
                        </button>
                    </form>
                    <p className='sm:text-xl text-center text-sm font-semibold'>Already have an account? <Link to='/login' className='hover:underline animate-pulse text-green-500'>Log-In!</Link></p>

                    {response && <p className="mt-2 text-center text-yellow-500">{response}</p>}
                    {error && <p className="mt-2 text-center text-yellow-500">{error}</p>}
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='md:w-[45%] md:h-[500px] rounded-[100%] hidden md:block'>
                    <img className='md:rounded-full md:h-[500px]' src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' alt='image' />
                </motion.div>
            </div>
            <Footer />
        </>
    );
};

export default Signin;
