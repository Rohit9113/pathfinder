import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FAQ from "../pages/FAQ";

// import geek from './Academics/img/GeeksforGeeks.webp';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Home() {
    const [academics, setAcademics] = useState([]);

    // console.log('VITE_BACKEND_URL:', import.meta.env.VITE_BACKEND_URL);


    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/academics`)
            .then((response) => {
                setAcademics(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the academic data:", error);
            });
    }, []);

    const displayedAcademics = academics.slice(0, 4);

    return (
        <>
           <div
            className="relative">

                <img 
                className="w-full h-[450px] sm:h-screen object-cover mb-10 md:mb-10"
                src="https://img.freepik.com/premium-photo/back-school-school-supplies-apple-yellow-background-layout-school-accessories-distance-learning_215990-1234.jpg?w=826" alt="Background"/>

                <div 
                id="text"
                className="absolute top-1/3 left-5 pt-11 sm:left-10 sm:pt-0 flex justify-center items-center text-black font-sans font-bold text-xl sm:text-5xl">
                    <p>Welcome To
                    <br /><span className="font-mono text-white">StudyPathFinder
                    <span className="animate-ping">_</span></span>
                    <br />
                One Stop Destination for Personalized <br />Platform Recommendations!</p>
                </div>

            </div>
            <br />

            <p className="text-center text-2xl font-bold capitalize mb-10 sm:text-5xl">Explore our Recommendations!</p>
            <div className="flex flex-wrap gap-14 py-4 md:py-8 lg:py-10 justify-center">
                {displayedAcademics.map((academic, index) => (
                    <div key={index} className="w-[80%] sm:w-[300px] md:w-[350px] lg:w-[250px]  rounded-3xl shadow-2xl overflow-hidden hover:bg-gray-600 border-4 border-transparent hover:border-black transition-all duration-300 ease-in-out">
                        <a href={academic.website || "#"} className="group block relative">
                            <img
                                src={academic.image?.url || geek}
                                alt={academic.academicname}
                                className="w-[100%] md:w-[100%] h-[200px] md:h-[250px] rounded-t-3xl transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <p className="text-center mt-1 text-black group-hover:text-[white] group-hover:font-bold transition-colors duration-300 font-semibold">
                                For More Details Click Here 
                            </p>
                        </a>

                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mb-20">
                <Link to="/Academics" className="mt-6 px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-lg font-semibold border-2 border-black bg-white rounded-lg shadow-lg hover:bg-gray-600 hover:scale-105 transition-all duration-300 ease-in-out hover:text-white text-center">
                    Click For More &nbsp; <i class="fa-solid fa-caret-right fa-sm sm:fa-lg"></i>
                </Link>
            </div>
            <div id="faq">
                <FAQ />
            </div>
       
        </>
    );
}

export default Home;
