import React, { useRef } from "react";
import { FaFacebook, FaAndroid, FaSpotify, FaGoogle, FaLinkedin } from "react-icons/fa";
import { SiLenovo } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const companies = [
  { name: "Facebook", logo: <FaFacebook className="text-blue-500 text-3xl" />, vacancies: 2 },
  { name: "Android", logo: <FaAndroid className="text-green-500 text-3xl" />, vacancies: 2 },
  { name: "Spotify", logo: <FaSpotify className="text-green-400 text-3xl" />, vacancies: 2 },
  { name: "Google", logo: <FaGoogle className="text-red-500 text-3xl" />, vacancies: 2 },
  { name: "Lenovo", logo: <SiLenovo className="text-red-600 text-3xl" />, vacancies: 2 },
  { name: "LinkedIn", logo: <FaLinkedin className="text-blue-400 text-3xl" />, vacancies: 5 },
];

export default function CompanyList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      // initial={{ opacity: 0, y: 50 }}
      // animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0d121e] text-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col lg:flex-row justify-between items-center min-h-screen"
    >
      {/* Left Section: Text + Companies */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold">Find Best Companies.</h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Search all the open positions on the web. Get your own personalized salary estimate. 
          Read reviews on over 30,000+ companies worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.5)" }}
              transition={{ duration: 0.3 }}
              className="flex items-center bg-[#1b233d] p-4 rounded-lg shadow-lg w-full sm:w-[350px] cursor-pointer"
            >
              <div className="mr-3">{company.logo}</div>
              <div>
                <h4 className="font-semibold">{company.name}</h4>
                <p className="text-cyan-400 text-sm">{company.vacancies} Vacancy</p>
              </div>
            </motion.div>
          ))}
        </div>

        <a href="#" className="text-gray-400 mt-5 inline-block hover:text-white transition text-sm sm:text-base">
          See More Companies →
        </a>
      </div>

      {/* Right Section: Images & Play Button */}
      <div className="relative lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <img
            src="https://jobstack-shreethemes.vercel.app/static/media/ab03.2b6e24b09b3690407ec5.jpg"
            className="rounded-lg shadow-lg w-full sm:w-[400px] h-[300px] sm:h-[400px] object-cover"
            alt="Office"
          />
        </motion.div>
        <motion.img
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          src="https://jobstack-shreethemes.vercel.app/static/media/ab04.c122948ac7bf15368325.jpg"
          className="rounded-lg shadow-lg w-[200px] h-[250px] sm:w-[300px] sm:h-[350px] object-cover absolute -bottom-20 sm:-bottom-30 left-10 sm:left-55 border-2 border-[#0d121e]"
          alt="Meeting Room"
        />
      </div>
    </motion.div>
  );
}
