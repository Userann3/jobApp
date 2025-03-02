import React from "react";
import { FaSearch, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import {
  SiGoogle, SiFacebook, SiAmazon, SiApple, SiLinkedin, SiNetflix, SiGithub,
  SiDiscord, SiReddit, SiYoutube, SiPaypal, SiTesla, SiSpotify, SiSamsung
} from "react-icons/si";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen bg-[#0d121e] text-white px-4 overflow-hidden">
        {/* Floating Tech Icons */}
        <div className="absolute w-full h-full hidden md:block">
          <SiGoogle className="absolute top-20 left-[30%] text-[#4285F4] text-5xl lg:text-6xl animate-pulse" />
          <SiFacebook className="absolute top-16 right-[15%] text-[#1877F2] text-5xl lg:text-6xl animate-pulse" />
          <SiAmazon className="absolute top-40 left-[10%] text-[#FF9900] text-5xl lg:text-6xl" />
          <SiApple className="absolute top-52 right-[10%] text-[#A2AAAD] text-5xl lg:text-6xl animate-pulse" />
          <SiLinkedin className="absolute bottom-100 left-[10%] text-[#0077B5] text-5xl lg:text-6xl" />
          <SiNetflix className="absolute bottom-65 right-[10%] text-[#E50914] text-5xl lg:text-6xl animate-pulse" />
          <SiGithub className="absolute top-64 left-[35%] text-[#f0f6fc] text-5xl lg:text-6xl animate-pulse" />
          <SiDiscord className="absolute bottom-32 right-[27%] text-[#5865F2] text-5xl lg:text-6xl animate-pulse" />
          <SiReddit className="absolute bottom-40 left-[15%] text-[#FF4500] text-5xl lg:text-6xl" />
          <SiYoutube className="absolute top-50 right-[30%] text-[#FF0000] text-5xl lg:text-6xl animate-pulse" />
          <SiPaypal className="absolute bottom-70 right-[35%] text-[#00457C] text-5xl lg:text-6xl" />
          <SiTesla className="absolute bottom-52 left-[27%] text-[#E82127] text-5xl lg:text-6xl animate-pulse" />
          <SiSpotify className="absolute top-96 right-[25%] text-[#1DB954] text-5xl lg:text-6xl" />
          <SiSamsung className="absolute bottom-40 left-[35%] text-[#1428A0] text-5xl lg:text-6xl animate-pulse" />
        </div>

        {/* Hero Content */}
        <h1 className="text-5xl md:text-7xl font-bold text-center">Find Your Dream Job</h1>
        <p className="text-xl text-gray-400 mt-4 text-center max-w-2xl">
          Explore thousands of job opportunities with ease
        </p>

        {/* Search Bar */}


        <SearchBar />

      </div>
    </>
  );
}