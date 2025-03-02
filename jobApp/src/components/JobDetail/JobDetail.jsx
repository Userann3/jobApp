import React from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
  FaMoneyBill,
  FaCalendarAlt,
} from "react-icons/fa";

export default function JobDetail({ job }) {
  // Default sample job data
  const defaultJob = {
    title: "Web Designer / Developer",
    company: "Tech Innovations Ltd",
    location: "Australia",
    employeeType: "Full Time",
    experience: "2+ years",
    qualifications: "MCA",
    salary: "$4000 - $4500",
    datePosted: "28th Feb, 2023",
    description: `One disadvantage of Lorem Ipsum is that in Latin certain letters appear more frequently than others – which creates a distinct visual impression. 
      Moreover, in Latin only words at the beginning of sentences are capitalized.
      This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized.`,
    responsibilities: [
      "Participate in requirements analysis → Write clean, scalable code using C# and .NET frameworks",
      "Test and deploy applications and systems → Revise, update, refactor, and debug code",
      "Improve existing software",
      "Develop documentation throughout the software development life cycle (SDLC)",
      "Serve as an expert on applications and provide technical support",
    ],
    skills: [
      "Proven experience as a .NET Developer or Application Developer",
      "Good understanding of SQL and Relational Databases, specifically Microsoft SQL Server",
      "Experience designing, developing, and creating RESTful web services and APIs",
    ],
  };

  const jobData = job || defaultJob; // Use passed job or fallback to sample

  return (
    <div className="bg-gray-900">
      <div className="bg-gray-900 min-h-screen max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8 text-white">
        {/* Left Sidebar - Sticky Job Information */}
        <aside className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg h-fit sticky top-4">
          <h3 className="text-xl font-semibold mb-4">Job Information</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center">
              <FaClock className="text-gray-300 mr-3" />
              <span>Employee Type: <span className="text-white">{jobData.employeeType}</span></span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-gray-300 mr-3" />
              <span>Location: <span className="text-white">{jobData.location}</span></span>
            </li>
            <li className="flex items-center">
              <FaBriefcase className="text-gray-300 mr-3" />
              <span>Job Type: <span className="text-white">{jobData.title}</span></span>
            </li>
            <li className="flex items-center">
              <FaClock className="text-gray-300 mr-3" />
              <span>Experience: <span className="text-white">{jobData.experience}</span></span>
            </li>
            <li className="flex items-center">
              <FaGraduationCap className="text-gray-300 mr-3" />
              <span>Qualifications: <span className="text-white">{jobData.qualifications}</span></span>
            </li>
            <li className="flex items-center">
              <FaMoneyBill className="text-gray-300 mr-3" />
              <span>Salary: <span className="text-white">{jobData.salary}</span></span>
            </li>
            <li className="flex items-center">
              <FaCalendarAlt className="text-gray-300 mr-3" />
              <span>Date Posted: <span className="text-white">{jobData.datePosted}</span></span>
            </li>
          </ul>
        </aside>

        {/* Right Section - Job Description and Details */}
        <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Job Description */}
          <h2 className="text-3xl font-bold text-white mb-4">{jobData.title}</h2>
          <h3 className="text-xl font-semibold mb-2 text-white">Job Description:</h3>
          <p className="text-gray-300 leading-relaxed">{jobData.description}</p>

          {/* Responsibilities */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Responsibilities and Duties:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {jobData.responsibilities.map((task, index) => (
                <li key={index} className="text-white">{task}</li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Required Experience, Skills, and Qualifications:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {jobData.skills.map((skill, index) => (
                <li key={index} className="text-white">{skill}</li>
              ))}
            </ul>
          </div>

          {/* Apply Now Button */}
          <div className="mt-8">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
