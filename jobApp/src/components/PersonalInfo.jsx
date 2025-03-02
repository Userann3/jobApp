// import React, { useState } from "react";
// import { FaEdit, FaSave } from "react-icons/fa";

// const PersonalInfo = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     title: "",
//     languages: "",
//     age: "",
//     currentSalary: "",
//     expectedSalary: "",
//     degree: "",
//     university: "",
//     graduationYear: "",
//     company: "",
//     jobTitle: "",
//     experienceYears: "",
//     phone: "",
//     email: "",
//     country: "",
//     postcode: "",
//     city: "",
//     fullAddress: "",
//     description: "",
//   });

//   const handleEdit = () => setIsEditing(!isEditing);
//   const handleChange = (e) =>
//     setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

//   return (
//     <main className="flex-1 bg-[#0d121e] p-4 md:p-8 rounded-lg shadow-lg text-white w-full">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#2a344a] pb-4">
//         <h2 className="text-xl md:text-2xl font-bold">Personal Information</h2>
//         <button
//           className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 mt-2 md:mt-0"
//           onClick={handleEdit}
//         >
//           {isEditing ? <FaSave className="mr-2" /> : <FaEdit className="mr-2" />}
//           {isEditing ? "Save" : "Edit"}
//         </button>
//       </div>

//       {/* Sections */}
//       {[
//         { title: "Basic Information", fields: [
//           { label: "Your Name", name: "name" },
//           { label: "Professional Title", name: "title" },
//           { label: "Languages", name: "languages" },
//           { label: "Age", name: "age" },
//           { label: "Current Salary ($)", name: "currentSalary" },
//           { label: "Expected Salary ($)", name: "expectedSalary" }
//         ]},
//         { title: "Education", fields: [
//           { label: "Degree", name: "degree" },
//           { label: "University", name: "university" },
//           { label: "Graduation Year", name: "graduationYear" }
//         ]},
//         { title: "Work Experience", fields: [
//           { label: "Company", name: "company" },
//           { label: "Job Title", name: "jobTitle" },
//           { label: "Years of Experience", name: "experienceYears" }
//         ]},
//         { title: "Contact Information", fields: [
//           { label: "Phone", name: "phone" },
//           { label: "Email Address", name: "email" },
//           { label: "Country", name: "country" },
//           { label: "Postcode", name: "postcode" },
//           { label: "City", name: "city" },
//           { label: "Full Address", name: "fullAddress" }
//         ]}
//       ].map((section, index) => (
//         <section key={index} className="mt-6">
//           <h3 className="text-lg font-semibold text-gray-300 mb-3">{section.title}</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {section.fields.map((field) => (
//               <div key={field.name}>
//                 <label className="block text-sm font-medium text-gray-400 mb-1">
//                   {field.label}:
//                 </label>
//                 <input
//                   type="text"
//                   name={field.name}
//                   className="w-full p-3 border border-[#2a344a] rounded-md bg-[#1a2236] text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
//                   value={userInfo[field.name]}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                 />
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}

//       {/* Description Field */}
//       <section className="mt-6">
//         <h3 className="text-lg font-semibold text-gray-300 mb-3">About Me</h3>
//         <label className="block text-sm font-medium text-gray-400 mb-1">
//           Description:
//         </label>
//         <textarea
//           name="description"
//           className="w-full p-3 border border-[#2a344a] rounded-md bg-[#1a2236] text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
//           rows="4"
//           value={userInfo.description}
//           onChange={handleChange}
//           disabled={!isEditing}
//         />
//       </section>
//     </main>
//   );
// };

// export default PersonalInfo;

import React from 'react'

export default function PersonalInfo() {
  return (
    <div>PersonalInfo</div>
  )
}
