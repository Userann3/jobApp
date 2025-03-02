import React, { useRef } from "react";
import { FaPhoneAlt, FaRocket, FaUserPlus, FaHourglassHalf } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const features = [
  { title: "24/7 Support", icon: <FaPhoneAlt className="text-blue-500" />, description: "Many desktop publishing now use and a search for job" },
  { title: "Tech & Startup Jobs", icon: <FaRocket className="text-red-500" />, description: "Many desktop publishing now use and a search for job" },
  { title: "Quick & Easy", icon: <FaUserPlus className="text-green-500" />, description: "Many desktop publishing now use and a search for job" },
  { title: "Save Time", icon: <FaHourglassHalf className="text-yellow-500" />, description: "Many desktop publishing now use and a search for job" },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0d121e] text-white px-[100px] py-16"
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold">Here's why you'll love Jobstack</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Search all the open positions on the web. Get your own personalized salary estimate. 
          Read reviews on over 30,000+ companies worldwide.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1b233d] p-6 rounded-lg text-center shadow-lg border border-transparent transition-all duration-300 hover:border-cyan-500"
          >
            <motion.div
              whileHover={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3 }}
              className="text-4xl mb-4 flex justify-center"
            >
              {feature.icon}
            </motion.div>
            <h4 className="font-semibold text-lg">{feature.title}</h4>
            <p className="text-gray-400 mt-2 text-sm">{feature.description}</p>
            <a href="#" className="text-cyan-400 mt-4 inline-block hover:text-white transition">
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
