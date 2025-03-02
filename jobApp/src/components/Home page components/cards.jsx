import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  MdDesignServices,
  MdCode,
  MdCampaign,
  MdAnalytics,
  MdOndemandVideo,
  MdBusinessCenter,
  MdPeople,
  MdSecurity,
} from "react-icons/md"; // Using Material Design Icons for a modern look

const categories = [
  { title: "Designing", icon: <MdDesignServices className="text-[#ff7eb3] w-12 h-12" />, jobs: 102, projects: 40, type: "Full-time", salary: "$50k - $80k", companies: "Adobe, Canva" },
  { title: "Development", icon: <MdCode className="text-[#61dafb] w-12 h-12" />, jobs: 150, projects: 60, type: "Remote", salary: "$60k - $120k", companies: "Google, Microsoft" },
  { title: "Marketing", icon: <MdCampaign className="text-[#facc15] w-12 h-12" />, jobs: 80, projects: 30, type: "Contract", salary: "$45k - $70k", companies: "HubSpot, Facebook" },
  { title: "Data Analysis", icon: <MdAnalytics className="text-[#34d399] w-12 h-12" />, jobs: 90, projects: 35, type: "Full-time", salary: "$55k - $95k", companies: "IBM, Oracle" },
  { title: "Video Editing", icon: <MdOndemandVideo className="text-[#ef4444] w-12 h-12" />, jobs: 70, projects: 25, type: "Freelance", salary: "$40k - $65k", companies: "YouTube, Netflix" },
  { title: "Business", icon: <MdBusinessCenter className="text-[#a855f7] w-12 h-12" />, jobs: 110, projects: 50, type: "Full-time", salary: "$65k - $110k", companies: "Tesla, Amazon" },
  { title: "Human Resources", icon: <MdPeople className="text-[#f97316] w-12 h-12" />, jobs: 85, projects: 28, type: "Hybrid", salary: "$50k - $85k", companies: "LinkedIn, Indeed" },
  { title: "Cybersecurity", icon: <MdSecurity className="text-[#3b82f6] w-12 h-12" />, jobs: 95, projects: 40, type: "Full-time", salary: "$75k - $130k", companies: "Cisco, Palo Alto" },
];

function Card({ title, icon, jobs, projects, type, salary, companies, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="w-full sm:w-[350px] h-[280px] bg-[#1b233d] p-6 rounded-xl shadow-lg transition-all border border-transparent hover:border-cyan-400 hover:shadow-cyan-500/20"
    >
      <div className="h-[80px] bg-[#131a2b] rounded-xl flex justify-center items-center text-4xl transition duration-300 hover:scale-105">
        {icon}
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{type} | {salary}</p>
        <div className="flex justify-around mt-4 text-white text-base">
          <div>
            <span className="block font-semibold text-xl">{jobs}</span>
            <span className="text-sm text-gray-400">Jobs</span>
          </div>
          <div className="border-l border-gray-600 px-3">
            <span className="block font-semibold text-xl">{projects}</span>
            <span className="text-sm text-gray-400">Projects</span>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-3">Top Companies: {companies}</p>
      </div>
    </motion.div>
  );
}

export default function CardGrid() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#0d121e] px-4 sm:px-10 md:px-16 lg:px-24 py-16">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-center text-white">
        Popular Categories
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-base sm:text-lg text-gray-400 text-center py-5">
        Explore thousands of job opportunities with ease
      </motion.p>

      <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
        {categories.map((category, index) => (
          <Card key={index} {...category} index={index} />
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="flex justify-center mt-12">
        <motion.button whileHover={{ backgroundColor: "#06b6d4" }} whileTap={{ scale: 0.95 }} className="flex items-center bg-cyan-600 text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-cyan-500">
          See More Categories <FaArrowRight className="ml-3" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}