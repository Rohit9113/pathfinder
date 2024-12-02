import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// import loading from './img/loading__.gif';

function Academics() {
  const [academics, setAcademics] = useState([]);

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

  return (
    <>
    <button className="bg-blue-950 text-white w-64 p-4 font-bold  rounded-full relative left-[80%] top-24"
    onClick={()=>{
      const filterAcademics=academics.filter((ace)=>ace.rating>4.5
      );
      setAcademics(filterAcademics);
    }}
    >Top rated academics </button>
    <div className="flex flex-wrap justify-center ">
   
      {academics.map((academic, index) => (
        <div key={index} className="flex bg-gray-200 rounded-l-full gap-4 mt-32 md:gap-20 justify-center items-center p-4">
          <div className="  w-40 h-40  md:w-80 md:h-80 bg-slate-900 md:ml-10 md:mt-10 rounded-full">
            <img  
            src={academic.image?.url || loading} alt={academic.academicname}
             className=" w-40 h-40  md:w-[310px] md:h-[310px] rounded-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
          </div>

          <div className="   md:w-[850px] md:h-96  md:ml-10 md:mt-10 rounded-3xl">
            <div className=" w-40 md:w-[100%] md:h-[360px] bg-slate-50 md:ml-0 md:mt-0 rounded-3xl p-4 shadow-2xl">
              <p className="text-center md:text-3xl text-lg font-bold">{academic.academicname}</p>
              <p className="text-sm  p-5 hidden md:block">{academic.description}</p>

              <div className="md:pl-5 ">
                <p className="md:text-lg  text-sm md:font-semibold mb-4">
                  Explore our top resources to enhance your skills and achieve your goals!
                </p>
                <div className=" gap-5 w-32  md:w-80  bg-blue-950 text-white p-1 md:p-2 rounded-full text-center">
                     <button className="md:text-3xl text-sm"><a href={academic.website}>Official Website</a> </button>
                </div>
              </div>

              <div className="md:px-6  pt-1  md:flex text-left md:justify-between md:pt-5">
               <div className="flex flex-col">
                 <p className="md:font-semibold md:text-xl text-sm">Country: {academic.country}</p>
             <p className="md:font-semibold  md:text-xl text-xs">Rating: {academic.rating|| "N/A"}⭐️⭐️⭐️⭐️</p>
            
            </div>
              <div className="">
             <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="red" />
                  <p className="font-semibold text-red-600 md:text-xl text-sm">{academic.location || "Online"}</p>
                </div>
             
             <div className="flex items-center gap-1">
                     <i className="font-semibold md:text-end md:text-xl text-xs">Founder: {academic.founder || "N/A"}</i>
              
                </div>
                </div>
                  {/* <p className="font-semibold">Founded: {academic.founded || "N/A"}</p> */}

              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Academics;
