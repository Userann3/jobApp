import React from "react";
import { FaPlay, FaCheckCircle ,FaQuestionCircle} from "react-icons/fa";
import { Link } from "react-router-dom";
import FeaturesSection from "../components/Home page components/FeaturesSection";
import JobCTA from "../components/Home page components/JobCTA";

export default function About() {
  return (
    <>
    <section className="bg-[#0f172a] text-white py-16 px-6 lg:px-[100px] flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side - Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Main Image */}
        <div className="relative">
          <img
            src="https://jobstack-shreethemes.vercel.app/static/media/ab01.016884c7bf778010e79c.jpg" // Replace with actual image
            alt="Main"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Overlapping Smaller Image */}
        <div className="absolute bottom-[-30px] left-[2px] w-[200px] lg:w-[250px] border-4 border-[#0f172a] shadow-lg">
          <img
            src="https://jobstack-shreethemes.vercel.app/static/media/ab02.f851a3dde08585493f97.jpg" // Replace with actual image
            alt="Secondary"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Side - Content Section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
          Millions of jobs. <br />
          <span className="text-cyan-500">Find the one that's right for you.</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Search all the open positions on the web. Get your own personalized salary estimate.
          Read reviews on over <span className="font-semibold">30,000+</span> companies worldwide.
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-3 text-gray-300">
            <FaCheckCircle className="text-cyan-500" /> Digital Marketing Solutions for Tomorrow
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <FaCheckCircle className="text-cyan-500" /> Our Talented & Experienced Marketing Agency
          </li>
          <li className="flex items-center gap-3 text-gray-300">
            <FaCheckCircle className="text-cyan-500" /> Create your own skin to match your brand
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="mt-6 inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-500 transition"
        >
          Contact us
        </Link>
      </div>
    </section>


    <FeaturesSection/>


    <section className="bg-[#0f172a] text-white py-30 px-6 lg:px-[100px]">
      {/* Stats Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-center">
        <div>
          <h3 className="text-4xl font-bold text-white">1,548K+</h3>
          <p className="text-gray-400">JOB FULFILLMENT</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">25+</h3>
          <p className="text-gray-400">BRANCHES</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">9+</h3>
          <p className="text-gray-400">YEARS EXPERIENCE</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold">Questions & Answers</h2>
        <p className="text-gray-400 mt-2">
          Search all the open positions on the web. Get your own personalized salary estimate.
        </p>
        <p className="text-gray-400 mt-2">
        Read reviews on over 30,000+ companies worldwide.        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-10 grid md:grid-cols-2 gap-8 justify-between">
        {/* Question 1 */}
        <div className="flex items-start gap-4">
          <FaQuestionCircle className="text-cyan-500 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold text-white">How does our Jobstack work?</h3>
            <p className="text-gray-400 mt-1">
              Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns.
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="flex items-start gap-4">
          <FaQuestionCircle className="text-cyan-500 text-xl mt-1" />
          <div>
            <h3 className="font-semibold text-white">What is the main process for opening an account?</h3>
            <p className="text-gray-400 mt-1">
              Words are random, the reader will not be distracted from making a neutral judgment on the visual impact.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className="flex items-start gap-4">
          <FaQuestionCircle className="text-cyan-500 text-2xl mt-1" />
          <div>
            <h3 className="font-semibold text-white">How to make unlimited data entry?</h3>
            <p className="text-gray-400 mt-1">
              Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression is not compromised.
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className="flex items-start gap-4">
          <FaQuestionCircle className="text-cyan-500 text-xl mt-1" />
          <div>
            <h3 className="font-semibold text-white">Is Jobstack safer to use with my account?</h3>
            <p className="text-gray-400 mt-1">
              The most well-known dummy text is 'Lorem Ipsum', which is said to have originated in the 16th century.
            </p>
          </div>
        </div>
      </div>
    </section>

    <JobCTA/>
    </>

    
  );
}


