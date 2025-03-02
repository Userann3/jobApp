import React, { useRef } from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { SiFacebook, SiGoogle, SiAndroid, SiLenovo, SiSpotify, SiLinkedin } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const jobData = [
    { id: 1, company: "Facebook", icon: <SiFacebook className="text-blue-500 text-3xl" />, role: "Web Designer / Developer", location: "Australia", status: "Full Time" },
    { id: 2, company: "Google", icon: <SiGoogle className="text-red-500 text-3xl" />, role: "Marketing Director", location: "USA", status: "Part Time" },
    { id: 3, company: "Android", icon: <SiAndroid className="text-green-500 text-3xl" />, role: "Application Developer", location: "China", status: "Remote" },
    { id: 4, company: "Lenovo", icon: <SiLenovo className="text-red-600 text-3xl" />, role: "Senior Product Designer", location: "Dubai", status: "WFH" },
    { id: 5, company: "Spotify", icon: <SiSpotify className="text-green-400 text-3xl" />, role: "Web Designer / Developer", location: "Australia", status: "Full Time" },
    { id: 6, company: "LinkedIn", icon: <SiLinkedin className="text-blue-400 text-3xl" />, role: "PHP Developer", location: "Pakistan", status: "Remote" },
];

export default function PopularJobs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    return (
        <div ref={ref} className="w-full bg-[#0d121e] py-10">
            <div className="text-white py-12 lg:mx-[100px]">
                <h2 className="text-center text-4xl font-bold">Popular Jobs</h2>
                <p className="text-center text-gray-400 mt-2">
                    Search all the open positions on the web. Get your personalized salary estimate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {jobData.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                            className="bg-[#1b233d] p-5 rounded-xl shadow-lg cursor-pointer transition-all border border-transparent hover:border-cyan-500"
                        >
                            <div className="flex items-center space-x-3">
                                {job.icon}
                                <div>
                                    <h3 className="font-semibold text-lg">{job.company}</h3>
                                    <p className="text-gray-400 text-sm">2 days ago</p>
                                </div>
                                <span className="ml-auto bg-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {job.status}
                                </span>
                            </div>
                            <h4 className="mt-4 font-semibold text-xl">{job.role}</h4>
                            <div className="flex items-center text-gray-400 mt-2">
                                <FaMapMarkerAlt className="mr-1" />
                                <span>{job.location}</span>
                            </div>
                            <div className="mt-3 text-sm text-gray-400">21 applied of 40 vacancies</div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                                <div className="bg-cyan-500 h-2 rounded-full w-1/2"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="lg:flex items-center bg-cyan-600 text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                    >
                        See More Jobs <FaArrowRight className="ml-3" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
