import React from "react";

export default function PostJobForm() {
  return (
    <div className="max-w-4xl mx-auto bg-[#1e293b] text-white p-6 rounded-lg shadow-lg min-h-[600px]">
      <h2 className="text-2xl font-semibold mb-4">Post a Job</h2>
      <form className="grid grid-cols-2 gap-4">
        {/* Job Title & Email */}
        <input type="text" placeholder="Enter Job Title" className="p-3 bg-gray-700 rounded-md focus:outline-none" />
        <input type="email" placeholder="Your Email" className="p-3 bg-gray-700 rounded-md focus:outline-none" />
        
        {/* Job Tags */}
        <input type="text" placeholder="Job Tags (e.g. html, css, bootstrap)" className="col-span-2 p-3 bg-gray-700 rounded-md focus:outline-none" />
        
        {/* Job Type & Experience */}
        <select className="p-3 bg-gray-700 rounded-md focus:outline-none">
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
        <select className="p-3 bg-gray-700 rounded-md focus:outline-none">
          <option>1 Year</option>
          <option>2 Years</option>
          <option>3+ Years</option>
          <option>5+ Years</option>
        </select>
        
        {/* Salary Range */}
        <input type="number" placeholder="Minimum Salary ($)" className="p-3 bg-gray-700 rounded-md focus:outline-none" />
        <input type="number" placeholder="Maximum Salary ($)" className="p-3 bg-gray-700 rounded-md focus:outline-none" />
        
        {/* Region & Location */}
        <input type="text" placeholder="Region" className="p-3 bg-gray-700 rounded-md focus:outline-none" />
        <input type="text" placeholder="Location" className="p-3 bg-gray-700 rounded-md focus:outline-none" />
        
        {/* Additional Fields */}
        <input type="text" placeholder="Company Name" className="col-span-2 p-3 bg-gray-700 rounded-md focus:outline-none" />
        <input type="text" placeholder="Industry Type" className="col-span-2 p-3 bg-gray-700 rounded-md focus:outline-none" />
        <textarea placeholder="Job Description" className="col-span-2 p-3 bg-gray-700 rounded-md focus:outline-none h-28"></textarea>
        
        {/* File Upload */}
        <div className="col-span-2 bg-gray-700 p-3 rounded-md flex items-center justify-center border border-gray-500 cursor-pointer">
          <span className="text-gray-300">📁 Upload File</span>
          <input type="file" className="hidden" />
        </div>
        
        {/* Submit Button */}
        <button type="submit" className="col-span-2 bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-500 transition">
          Upload
        </button>
      </form>
    </div>
  );
}
