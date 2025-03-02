import React from "react";
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple, FaFacebook } from "react-icons/fa";

const jobs = [
  {
    rank: 1,
    title: "Software Engineer",
    jobsAvailable: "150K+",
    avgSalary: "$120,000",
    companies: [<FaGoogle />, <FaMicrosoft />, <FaAmazon />],
  },
  {
    rank: 2,
    title: "Data Scientist",
    jobsAvailable: "90K+",
    avgSalary: "$130,000",
    companies: [<FaApple />, <FaGoogle />, <FaAmazon />],
  },
  {
    rank: 3,
    title: "Cloud Engineer",
    jobsAvailable: "80K+",
    avgSalary: "$125,000",
    companies: [<FaMicrosoft />, <FaAmazon />, <FaGoogle />],
  },
  {
    rank: 4,
    title: "Cybersecurity Analyst",
    jobsAvailable: "75K+",
    avgSalary: "$115,000",
    companies: [<FaGoogle />, <FaFacebook />, <FaMicrosoft />],
  },
  {
    rank: 5,
    title: "AI/ML Engineer",
    jobsAvailable: "85K+",
    avgSalary: "$140,000",
    companies: [<FaApple />, <FaMicrosoft />, <FaGoogle />],
  },
];

export default function SkillCards() {
  return (
    <div className="bg-[#0d121e] py-16 px-[100px] text-white">
      <h2 className="text-4xl font-bold text-center mb-8">🔥 Trending Jobs</h2>
      <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Discover the most in-demand job roles, salaries, and top companies hiring.
      </p>

      {/* Leaderboard */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {jobs.map((job) => (
          <div
            key={job.rank}
            className="bg-[#1a1f2e] flex items-center justify-between p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Rank & Title */}
            <div className="flex items-center space-x-6">
              <span className="text-4xl font-bold text-yellow-400">#{job.rank}</span>
              <h3 className="text-2xl font-semibold">{job.title}</h3>
            </div>

            {/* Job Data */}
            <div className="flex flex-col items-end space-y-1">
              <span className="text-lg font-medium text-gray-300">{job.jobsAvailable} Jobs</span>
              <span className="text-sm text-gray-400">Avg Salary: {job.avgSalary}</span>
              {/* Company Logos */}
              <div className="flex space-x-3 text-2xl text-gray-300">{job.companies}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
