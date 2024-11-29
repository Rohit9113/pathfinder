import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!passwordRegex.test(formData.password)) {
            newErrors.password =
                "Password must be 6-16 characters, and at least one letter, one number, and one special character.";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Password not matched";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const res = await axios.post(`${BACKEND_URL}/api/signup/signup`, formData);
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
            <div className='max-w-screen-xl mx-auto flex flex-wrap py-20 md:py-20 items-center justify-center md:items-center md:justify-center'>
                <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='h-auto md:w-[45%] bg-cyan-200 md:h-[510px] rounded-3xl md:p-6 w-[90%]'>
                    <h3 className='sm:text-4xl m-auto text-center md:mb-2 font-bold'>
                        SIGN-UP
                    </h3>
                    <p className='sm:text-xl text-center sm:mb-2 font-bold'>Enter Your Account Details To Sign-Up!</p>
                    <form onSubmit={handleSubmit} className='w-full sm:w-full md:mt-6 flex flex-col justify-center items-center md:ml-14'>
                        <div className='w-full mb-3'>
                            <input
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete='off'
                                placeholder='Enter Your Full Name'
                                required
                                className='mt-3 w-full sm:w-[400px] md:w-[400px] p-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className='w-full mb-3'>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete='off'
                                required
                                placeholder='Enter Your Email'
                                className='mt-3 w-full sm:w-[400px] md:w-[400px] p-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className='w-full mb-3'>
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete='off'
                                required
                                placeholder='Enter Password'
                                className='mt-3 w-full sm:w-[400px] md:w-[400px] p-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <div className='w-full mb-5'>
                            <input
                                type='password'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                autoComplete='off'
                                required
                                placeholder='Enter Confirm Password'
                                className='mt-3 w-full sm:w-[400px] md:w-[400px] p-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>

                        <button
                            type='submit'
                            className='w-[200px] mb-1 sm:w-[150px] py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700'>
                            Create Account
                        </button>
                    </form>
                    <p className='sm:text-xl text-center text-sm font-semibold'>
                        Already have an account?{' '}
                        <Link to='/login' className='hover:underline animate-pulse text-green-500'>
                            Log-In!
                        </Link>
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='md:w-[45%] md:h-[500px] rounded-[100%] hidden md:block'>
                    <img className='md:rounded-full md:h-[500px]' src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' alt='image' />
                </motion.div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Signin;
