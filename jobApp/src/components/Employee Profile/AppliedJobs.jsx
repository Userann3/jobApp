import React from "react";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

const AppliedJobs = () => {
  const appliedJobs = [
    {
      id: 1,
      title: "PHP Web Developer",
      company: "@company-name",
      location: "Sacramento, California",
      salary: "25,000",
      tags: ["PHP", "Angular", "Bootstrap", "WordPress"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Software Developer",
      company: "@company-name",
      location: "Sacramento, California",
      salary: "25,000",
      tags: ["PHP", "Angular", "Bootstrap", "WordPress"],
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Software Developer",
      company: "@company-name",
      location: "Sacramento, California",
      salary: "25,000",
      tags: ["PHP", "Angular", "Bootstrap", "WordPress"],
      posted: "2 days ago",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto   rounded-sm">
        <h2 className="text-2xl font-bold mb-6">Applied Jobs</h2>
      {appliedJobs.map((job) => (
        <div
          key={job.id}
          className="bg-[#1a1f2e] p-5 rounded-lg shadow-md mb-4 border border-[#2c374f]"
        >
          <h3 className="text-lg font-semibold text-white">{job.title}</h3>
          <p className="text-gray-400 flex items-center gap-2">
            <span>{job.company}</span>
            <FaMapMarkerAlt className="text-blue-400" />
            <span>{job.location}</span>
            <FaMoneyBillWave className="text-green-400" />
            <span>{job.salary}</span>
          </p>
          <div className="flex flex-wrap gap-2 my-3">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-400">
              <span className="font-semibold text-gray-300">Posted:</span> {job.posted}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Applied Job
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
