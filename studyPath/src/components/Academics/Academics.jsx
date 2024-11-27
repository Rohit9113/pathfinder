import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// import loading from './img/loading__.gif';

function Academics() {
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/academics")
      .then((response) => {
        setAcademics(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the academic data:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap">
      {academics.map((academic, index) => (
        <div key={index} className="flex">
          <div className="md:w-[400px] md:h-[250px] bg-slate-900 md:ml-10 md:mt-10 rounded-3xl">
            <img src={academic.image?.url || loading} alt={academic.academicname} className="md:w-[100%] md:h-[245px] rounded-3xl" />
          </div>

          <div className="md:w-[850px] md:h-[250px] bg-slate-900 md:ml-10 md:mt-10 rounded-3xl">
            <div className="md:w-[100%] md:h-[245px] bg-slate-400 md:ml-0 md:mt-0 rounded-3xl p-4">
              <p className="text-center text-3xl font-bold">{academic.academicname}</p>
              <p className="text-xs">{academic.description}</p>

              <div className="p-3">
                <p className="text-lg font-semibold mb-4">
                  Explore our top resources to enhance your skills and achieve your goals!
                </p>
                <ul className="flex flex-wrap gap-5">
                  <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Courses</a></li>
                  <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Tutorials</a></li>
                  <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Jobs</a></li>
                  <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Practice</a></li>
                  <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Official Website</a></li>
                </ul>
              </div>

              <div className="px-6 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="red" />
                  <p className="font-semibold text-red-600">{academic.location || "Online"}</p>
                </div>
                <p className="font-semibold">Founder: {academic.founder || "N/A"}</p>
                <p className="font-semibold">Country: {academic.country}</p>
                <p className="font-semibold">Founded: {academic.founded || "N/A"}</p>

                <div className="flex items-center gap-1">
                  <p className="font-semibold ml-2">Rating: {academic.rating || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Academics;
