import React, { useState } from "react";
import { FaEdit, FaTrash, FaBriefcase, FaMapMarkerAlt, FaMoneyBill } from "react-icons/fa";

export default function ManageJobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      location: "New York, USA",
      salary: "$70,000 - $90,000",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "San Francisco, USA",
      salary: "$80,000 - $100,000",
    },
  ]);

  const [editingJob, setEditingJob] = useState(null);
  const [editedJob, setEditedJob] = useState({});

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleEdit = (job) => {
    setEditingJob(job.id);
    setEditedJob(job);
  };

  const handleSave = () => {
    setJobs(jobs.map((job) => (job.id === editedJob.id ? editedJob : job)));
    setEditingJob(null);
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-bold mb-6">Manage Jobs</h2>

      {jobs.length === 0 ? (
        <p className="text-gray-400">No jobs posted yet.</p>
      ) : (
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gray-800 p-5 rounded-lg shadow flex justify-between items-center">
              {editingJob === job.id ? (
                <div className="flex flex-col space-y-3 w-full">
                  <input
                    type="text"
                    value={editedJob.title}
                    onChange={(e) => setEditedJob({ ...editedJob, title: e.target.value })}
                    className="bg-gray-700 p-2 rounded-lg text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={editedJob.location}
                    onChange={(e) => setEditedJob({ ...editedJob, location: e.target.value })}
                    className="bg-gray-700 p-2 rounded-lg text-white focus:outline-none"
                  />
                  <input
                    type="text"
                    value={editedJob.salary}
                    onChange={(e) => setEditedJob({ ...editedJob, salary: e.target.value })}
                    className="bg-gray-700 p-2 rounded-lg text-white focus:outline-none"
                  />
                  <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex-1">
                  <h3 className="text-xl font-semibold flex items-center">
                    <FaBriefcase className="mr-2" /> {job.title}
                  </h3>
                  <p className="text-gray-400 flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> {job.location}
                  </p>
                  <p className="text-gray-400 flex items-center">
                    <FaMoneyBill className="mr-2" /> {job.salary}
                  </p>
                </div>
              )}

              <div className="flex space-x-4">
                <button onClick={() => handleEdit(job)} className="text-yellow-400 hover:text-yellow-500 transition">
                  <FaEdit size={20} />
                </button>
                <button onClick={() => handleDelete(job.id)} className="text-red-500 hover:text-red-600 transition">
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
