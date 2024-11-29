import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/login/login', formData);

            if (res.status === 200) {
                localStorage.setItem('authToken', res.data.token);
                navigate('/');
            }
        } catch (error) {
            const errorMessage = error.response && error.response.data.message 
                ? error.response.data.message 
                : 'An error occurred';
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='w-full md:h-[700px] gap-5 flex flex-wrap md:py-20 md:items-center md:justify-center'>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='md:w-[45%] md:h-[500px] rounded-[100%]' >
                    <img className='md:rounded-full md:h-[500px]' src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' alt='image' />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='md:w-[45%] bg-cyan-200 md:h-[500px] rounded-[20%] md:p-14' >
                    <h3 className='text-2xl m-auto text-center md:mb-5 font-bold'>
                        Login with Your Email and Password to Access All Features
                    </h3>
                    <form className='w-full md:mt-10' onSubmit={handleSubmit}>
                        <div className='mb-1'>
                            <input type='email' name='email' autoComplete='off' value={formData.email} onChange={handleChange} required placeholder='Enter Your Email' className='mt-2 p-3 w-[500px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                        </div>

                        <div className='mb-5'>
                            <input type='password' name='password' autoComplete='off' value={formData.password} onChange={handleChange} required placeholder='Enter Password' className='mt-2 p-3 w-[500px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                        </div>
                        <button type='submit' className='font-cormorant md:ml-40 md:w-[150px] py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                            Login
                        </button>
                    </form>

                    <Link to='/signup'>
                        <p className='text-center text-xl font-bold md:py-6'>Click Here to Signup</p>
                    </Link>
                </motion.div>
            </div>
        </>
    );
};

export default Login;
