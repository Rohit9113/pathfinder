import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/signup/signup', formData);
            if (res.status === 201) {
                toast.success(res.data.message, { position: "top-center" });
                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message, { position: "top-center" });
            } else {
                toast.error("An unexpected error occurred. Please try again.", { position: "top-center" });
            }
        }
    };

    return (
        <>
            <div className='w-full md:h-[700px] gap-5 flex flex-wrap md:py-20 md:items-center md:justify-center'>
                <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='md:w-[45%] bg-cyan-200 md:h-[500px] rounded-[20%] md:p-14'>
                    <h3 className='text-2xl m-auto text-center md:mb-5 font-bold'>
                        Create Your Account and access all features
                    </h3>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className='mb-1'>
                            <input type='text' name='name' value={formData.name} onChange={handleChange} autoComplete='off'
                                placeholder='Enter Your Full Name' required className='mt-2 p-3 w-[500px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                        </div>

                        <div className='mb-1'>
                            <input type='email' name='email' value={formData.email} onChange={handleChange} autoComplete='off' required placeholder='Enter Your Email' className='mt-2 p-3 w-[500px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                        </div>

                        <div className='mb-1'>
                            <input type='password' name='password' value={formData.password} onChange={handleChange} autoComplete='off' required placeholder='Enter Password' className='mt-2 p-3 w-[500px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                        </div>

                        <div className='mb-5'>
                            <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} autoComplete='off' required placeholder='Enter Confirm Password' className='mt-2 p-3 w-[500px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
                        </div>

                        <button type='submit' className='font-cormorant md:ml-40 md:w-[150px] py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                            Create Account
                        </button>
                    </form>
                    <Link to='/login'>
                        <p className='text-center text-xl font-bold md:py-6'>Click Here to Login</p>
                    </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='md:w-[45%] md:h-[500px] rounded-[100%]'>
                    <img className='md:rounded-full md:h-[500px]' src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' alt='image'/>
                </motion.div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Signin;
