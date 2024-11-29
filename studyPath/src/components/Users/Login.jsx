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
                localStorage.setItem('user', JSON.stringify(res.data.user));
                navigate('/');
                window.location.reload();
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
            <div>
                <div className='max-w-screen-xl mx-auto flex flex-wrap py-60 md:py-20 items-center justify-center md:items-center md:justify-center'>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='md:w-[45%] md:h-[500px] rounded-[100%]' >
                    <img className='md:rounded-full md:h-[500px] hidden md:block' src='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' alt='image' />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className='h-auto md:w-[45%] bg-cyan-200 md:h-[500px] rounded-3xl md:p-14 w-[90%] flex flex-col justify-center'>
                    <h3 className='sm:text-5xl sm:mb-0 text-center sm:mt-10 font-bold'>
                        LOGIN   
                    </h3>
                    <p className='sm:text-xl text-center md:mb-5 font-semibold'>Enter Your Account Details</p>
                    {/* {response && <p className="mt-4 text-center text-yellow-500">{response}</p>} */}
                    <form className='w-full sm:w-full md:mt-10 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                        <div className='mb-1'>
                            <input type='email' name='email' autoComplete='off' value={formData.email} onChange={handleChange} required placeholder='Enter Your Email ID' className='mt-9 w-[300px] sm:mb-2 sm:p-3 px-2 py-2 text-sm md:w-[450px] rounded-full outline-indigo-500' />
                        </div>

                        <div className='mb-5'>
                            <input type='password' name='password' autoComplete='off' value={formData.password} onChange={handleChange} required placeholder='Enter Your Password' className='mt-3 w-[300px] sm:mb-6 sm:p-3 px-2 py-2 text-sm md:w-[450px] rounded-full outline-indigo-500' />
                        </div>
                        <button type='submit' className='w-[100px] px-5 mt-5 mb-5 sm:w-[150px] py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700'>
                            Login
                        </button>
                    </form>
                    
                        <p className='sm:text-xl text-center md:mb-5 text-sm mt-5 mb-5 font-semibold md:py-8 sm:mt-8'>Don't Have an Account, <Link to='/signup' className='hover:underline animate-pulse text-green-500'>Register Now!</Link></p>
                </motion.div>
            </div>
            </div>

        </>
    );
};

export default Login;
