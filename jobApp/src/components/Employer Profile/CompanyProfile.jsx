import React, { useState } from "react";
import { FaBuilding, FaGlobe, FaMapMarkerAlt, FaCamera } from "react-icons/fa";

export default function CompanyProfile() {
  const [company, setCompany] = useState({
    name: "Tech Solutions",
    description: "Innovative software development company providing cutting-edge solutions.",
    location: "San Francisco, CA",
    website: "https://techsolutions.com",
    logo: "https://via.placeholder.com/150",
  });

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCompany({ ...company, logo: imageUrl });
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-bold mb-6">Company Profile</h2>

      {/* Company Logo Section */}
      {/* <div className="text-center mb-6 relative">
        <div className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 overflow-hidden relative">
          <img src={company.logo} alt="Company Logo" className="w-full h-full object-cover" />
          <label className="absolute bottom-1 right-2 bg-cyan-600 text-white p-2 rounded-full shadow-lg hover:bg-cyan-700 transition duration-300 cursor-pointer">
            <FaCamera className="text-lg" />
            <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
          </label>
        </div>
      </div> */}

      {/* Company Details Form */}
      <div className="space-y-5">
        <div>
          <label className="block text-gray-400 text-lg">Company Name</label>
          <div className="flex items-center bg-gray-800 p-3 rounded-lg">
            <FaBuilding className="text-gray-400 mr-3" />
            <input
              type="text"
              name="name"
              value={company.name}
              onChange={handleChange}
              className="bg-transparent focus:outline-none text-white w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-lg">Description</label>
          <textarea
            name="description"
            value={company.description}
            onChange={handleChange}
            className="w-full bg-gray-800 p-3 rounded-lg text-white focus:outline-none"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-400 text-lg">Location</label>
          <div className="flex items-center bg-gray-800 p-3 rounded-lg">
            <FaMapMarkerAlt className="text-gray-400 mr-3" />
            <input
              type="text"
              name="location"
              value={company.location}
              onChange={handleChange}
              className="bg-transparent focus:outline-none text-white w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-lg">Website</label>
          <div className="flex items-center bg-gray-800 p-3 rounded-lg">
            <FaGlobe className="text-gray-400 mr-3" />
            <input
              type="text"
              name="website"
              value={company.website}
              onChange={handleChange}
              className="bg-transparent focus:outline-none text-white w-full"
            />
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition duration-300">
          Save Changes
        </button>
      </div>
    </div>
  );
}
