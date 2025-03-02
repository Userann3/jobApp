import React, { useState } from "react";
import { FaTrash, FaEye, FaTimes } from "react-icons/fa";

const SavedJobs = () => {
  // Sample data for premium jobs
  const [premiumJobs, setPremiumJobs] = useState([
    {
      id: 1,
      logo: "https://logo.clearbit.com/google.com", // Real image link
      title: "Social Media Expert",
      company: "@company-name",
      dateSaved: "December 15, 2021",
      description:
        "We are looking for a Social Media Expert to manage our online presence and grow our audience.",
    },
    {
      id: 2,
      logo: "https://logo.clearbit.com/facebook.com", // Real image link
      title: "Frontend Developer",
      company: "@tech-corp",
      dateSaved: "November 20, 2023",
      description:
        "Join our team as a Frontend Developer and work on cutting-edge web applications.",
    },
    {
      id: 3,
      logo: "https://logo.clearbit.com/amazon.com", // Real image link
      title: "Data Scientist",
      company: "@data-masters",
      dateSaved: "October 10, 2023",
      description:
        "We are hiring a Data Scientist to analyze large datasets and build predictive models.",
    },
  ]);

  const [selectedJob, setSelectedJob] = useState(null); // To store the selected job for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

  // Function to open the modal with job details
  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  // Function to handle job deletion
  const handleDeleteJob = (id) => {
    setPremiumJobs(premiumJobs.filter((job) => job.id !== id));
  };

  return (
    <div className=" text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Saved Jobs</h2>

      {/* Job List */}
      <div className="space-y-4">
        {premiumJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-[#1a2236] rounded-lg border border-[#2a344a] hover:bg-[#222c42] transition duration-300"
          >
            <div className="flex items-center justify-between">
              {/* Left Section: Logo, Job Title, Company, Date */}
              <div className="flex items-center space-x-4">
                {/* Employer Logo */}
                <img
                  src={job.logo}
                  alt="Employer Logo"
                  className="w-12 h-12 rounded-full"
                />

                {/* Job Details */}
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-400">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.dateSaved}</p>
                </div>
              </div>

              {/* Right Section: Action Buttons */}
              <div className="flex items-center space-x-4">
                {/* View Button */}
                <button
                  onClick={() => openModal(job)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition duration-300"
                >
                  <FaEye className="text-lg" />
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteJob(job.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition duration-300"
                >
                  <FaTrash className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Job Details */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-[#1a2236] p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">{selectedJob.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4">
              {/* Employer Logo and Company Name */}
              <div className="flex items-center space-x-4">
                <img
                  src={selectedJob.logo}
                  alt="Employer Logo"
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-gray-400">{selectedJob.company}</p>
              </div>

              {/* Saved Date */}
              <p className="text-sm text-gray-500">
                <strong>Saved on:</strong> {selectedJob.dateSaved}
              </p>

              {/* Job Description */}
              <p className="text-gray-400">
                <strong>Description:</strong> {selectedJob.description}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedJobs;