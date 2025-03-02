import React, { useRef } from "react";
import { Briefcase, Star, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function JobCTA() {
  const ref = useRef(null);
  // const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      // initial={{ opacity: 0, y: 50 }}
      // animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center px-[100px] py-16 bg-[#0d121e]"
    >
      <div className="w-full bg-[#111827] rounded-lg p-8 flex flex-col sm:flex-row items-center justify-around shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        {/* Background Icons with Floating Effect */}
        <div className="absolute inset-0 flex justify-around items-center opacity-10 pointer-events-none">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <Briefcase size={140} className="text-blue-400" />
          </motion.div>
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Star size={140} className="text-yellow-400" />
          </motion.div>
          <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <Users size={140} className="text-green-400" />
          </motion.div>
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <Globe size={140} className="text-purple-400" />
          </motion.div>
        </div>

        {/* Left Content */}
        <div className="max-w-lg relative z-10 py-5">
          <h2 className="text-white text-2xl font-semibold">Explore a job now!</h2>
          <p className="text-gray-400 mt-2">
            Search all the open positions on the web. Get your own personalized salary estimate. 
            Read reviews on over 30,000+ companies worldwide.
          </p>
        </div>

        {/* Right Content - Buttons with Hover Effects */}
        <div className="flex gap-4 mt-6 sm:mt-0 relative z-10">
          <motion.button
            // whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-600 text-white px-7 py-3 rounded-lg font-medium transition"
          >
            Apply Now
          </motion.button>
          <motion.button
            // whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1e293b] text-gray-300 px-7 py-3 rounded-lg font-medium transition"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
