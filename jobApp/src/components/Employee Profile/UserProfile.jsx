import React, { useState } from "react";
import {
  FaUser,
  FaFileAlt,
  FaHeart,
  FaBriefcase,
  FaLock,
  FaSignOutAlt,
  FaCamera,
} from "react-icons/fa";
import PersonalInfo from "../PersonalInfo";
import MyResume from "./MyResume";
import AppliedJobs from "./AppliedJobs";
import SavedJobs from "./SavedJobs";
import ChangePassword from "./ChangePassword";
import Resume from "./Resume";

export default function UserProfile() {
  const [activeSection, setActiveSection] = useState("profile");

  const menuItems = [
    { id: "profile", icon: FaUser, text: "Profile" },
    { id: "resume", icon: FaFileAlt, text: "My Resume" },
    { id: "savedJobs", icon: FaHeart, text: "Saved Jobs" },
    { id: "appliedJobs", icon: FaBriefcase, text: "Applied Jobs" },
    { id: "changePassword", icon: FaLock, text: "Change Password" },
  ];

  return (
    <div className="bg-[#0d121e] min-h-screen flex w-full ">
      {/* Sidebar - Sticky and Full Height */}
      <aside className="w-1/4 bg-gray-900 p-8 me-5 shadow-md rounded-lg text-white h-screen sticky top-0 flex flex-col">
        <div className="text-center relative">
          <div className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 overflow-hidden relative">
            <img
              src="https://job-board.dexignzone.com/xhtml/images/team/pic1.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            {/* Camera Icon Button for Updating Profile Picture */}
            <button className="absolute bottom-1 right-2 bg-cyan-600 text-white p-2 rounded-full shadow-lg hover:bg-cyan-700 transition duration-300">
              <FaCamera className="text-lg" />
            </button>
          </div>
          <h2 className="text-2xl font-bold mt-4">David Matin</h2>
          <p className="text-gray-400 text-lg">Web Developer</p>
        </div>

        <nav className="mt-8 flex-1">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`flex items-center text-lg cursor-pointer ${
                  activeSection === item.id
                    ? "text-blue-400 font-bold"
                    : "text-gray-300 hover:text-blue-400"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="mr-4 text-xl" /> {item.text}
              </li>
            ))}
            <li className="flex items-center text-red-500 hover:text-red-700 cursor-pointer font-semibold text-lg">
              <FaSignOutAlt className="mr-4 text-xl" /> Log Out
            </li>
          </ul>
        </nav>
      </aside>

      {/* Right Section - Scrollable with Styled Scrollbar */}
      <div className="flex-1 bg-gray-800 p-6 md:p-10 rounded-lg shadow-md text-white h-screen overflow-y-auto custom-scrollbar">
        {/* {activeSection === "profile" && <PersonalInfo />} */}
        {activeSection === "profile" && <Resume />}
        {activeSection === "resume" && <MyResume />}
        {activeSection === "savedJobs" && <SavedJobs />}
        {activeSection === "appliedJobs" && <AppliedJobs />}
        {activeSection === "changePassword" && <ChangePassword />}
      </div>
    </div>
  );
}
