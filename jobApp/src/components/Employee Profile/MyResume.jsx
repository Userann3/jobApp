// import React from "react";
// import { useState } from "react";

// const MyResume = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [resumeData, setResumeData] = useState({
//     name: "Aaditya Rana",
//     title: "Frontend Developer",
//     email: "aadityarana900@gmail.com",
//     phone: "9650970776",
//     address: "New Delhi, India",
//     skills: ["JavaScript", "React", "CSS", "HTML", "Node.js"],
//     experience: [
//       {
//         position: "Junior Software Developer",
//         company: "W3ITexperts",
//         duration: "Oct 2021 - Present",
//         description: "Working on frontend development using React and TailwindCSS."
//       }
//     ],
//     education: [
//       { degree: "12th Grade", year: "2019", institution: "Open Schooling" },
//       { degree: "10th Grade", year: "2021", institution: "Open Schooling" }
//     ],
//     certifications: [
//       "Certified React Developer",
//       "JavaScript Mastery Course"
//     ],
//     projects: [
//       { title: "Banking App", description: "A futuristic banking application." },
//       { title: "Job Portal", description: "A sleek job portal with dark mode." }
//     ]
//   });

//   const handleEdit = () => setIsEditing(!isEditing);

//   return (
//     <div className="bg-[#0f172a] p-6 md:p-10 w-full max-w-6xl mx-auto rounded-lg shadow-md text-gray-100 font-serif">
//       {/* Header Section */}
//       <div className="flex justify-between items-center border-b border-gray-600 pb-3">
//         <h2 className="text-2xl font-semibold">My Resume</h2>
//         <button 
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
//           onClick={handleEdit}
//         >
//           {isEditing ? "Save" : "Edit"}
//         </button>
//       </div>

//       {/* Basic Information */}
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold border-b border-gray-600 pb-2">Basic Information</h3>
//         <p><strong>Name:</strong> {resumeData.name}</p>
//         <p><strong>Title:</strong> {resumeData.title}</p>
//         <p><strong>Email:</strong> {resumeData.email}</p>
//         <p><strong>Phone:</strong> {resumeData.phone}</p>
//         <p><strong>Address:</strong> {resumeData.address}</p>
//       </div>

//       {/* Skills */}
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold border-b border-gray-600 pb-2">Skills</h3>
//         <ul className="flex flex-wrap gap-2">
//           {resumeData.skills.map(skill => (
//             <li key={skill} className="bg-gray-700 px-3 py-1 rounded text-gray-100">{skill}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Experience */}
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold border-b border-gray-600 pb-2">Experience</h3>
//         {resumeData.experience.map((exp, index) => (
//           <div key={index} className="border-b border-gray-600 pb-2 mb-2">
//             <p><strong>{exp.position}</strong> at {exp.company}</p>
//             <p>{exp.duration}</p>
//             <p>{exp.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Education */}
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold border-b border-gray-600 pb-2">Education</h3>
//         {resumeData.education.map((edu, index) => (
//           <div key={index} className="border-b border-gray-600 pb-2 mb-2">
//             <p><strong>{edu.degree}</strong> ({edu.year})</p>
//             <p>{edu.institution}</p>
//           </div>
//         ))}
//       </div>

//       {/* Certifications */}
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold border-b border-gray-600 pb-2">Certifications</h3>
//         <ul>
//           {resumeData.certifications.map((cert, index) => (
//             <li key={index}>{cert}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Projects */}
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold border-b border-gray-600 pb-2">Projects</h3>
//         {resumeData.projects.map((project, index) => (
//           <div key={index} className="border-b border-gray-600 pb-2 mb-2">
//             <p><strong>{project.title}</strong></p>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyResume;








import React, { useState } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

const MyResume = () => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null); // To store the file type (image or PDF)
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileUrl = URL.createObjectURL(uploadedFile);
      setFile(fileUrl);

      // Determine file type
      if (uploadedFile.type.startsWith("image/")) {
        setFileType("image");
      } else if (uploadedFile.type === "application/pdf") {
        setFileType("pdf");
      } else {
        setFileType(null); // Unsupported file type
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileType(null);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-8 bg-[#0f172a] text-white rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Upload Your Resume</h2>

      {/* File Upload Section */}
      {!file ? (
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 p-12 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-800 transition duration-300">
          <FaCloudUploadAlt className="text-5xl text-gray-400 mb-4" />
          <span className="text-gray-400 text-lg">Click to Upload Resume (PDF or Image)</span>
          <input
            type="file"
            accept="application/pdf, image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      ) : (
        <div className="relative mt-6">
          {/* File Preview */}
          {fileType === "image" && (
            <div onClick={openModal} className="cursor-pointer">
              <img
                src={file}
                alt="Uploaded Resume"
                className="w-full h-auto max-h-[600px] object-contain border border-gray-600 rounded-lg shadow-md"
              />
            </div>
          )}

          {fileType === "pdf" && (
            <iframe
              src={file}
              title="Resume Preview"
              className="w-full h-[600px] border border-gray-600 rounded-lg shadow-md"
            ></iframe>
          )}

          {/* Remove Button */}
          <button
            onClick={handleRemoveFile}
            className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition duration-300"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
      )}

      {/* Instructions */}
      {!file && (
        <p className="text-gray-400 text-sm text-center mt-4">
          Supported formats: PDF or Image (max size: 5MB)
        </p>
      )}

      {/* Modal for Full Image */}
      {isModalOpen && fileType === "image" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-[#0f172a] p-6 rounded-lg shadow-lg max-w-4xl max-h-[90vh] overflow-auto">
            <img
              src={file}
              alt="Full Uploaded Resume"
              className="w-full h-auto object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition duration-300"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyResume;
