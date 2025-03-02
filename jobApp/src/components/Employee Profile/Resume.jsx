import React, { useState } from "react";

const Resume = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "David Matin",
    aboutMe:
      "Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.",
    personalDetails: {
      email: "thomas@mail.com",
      dob: "31st Dec, 1996",
      address: "15 Razy Street",
      city: "London",
      country: "UK",
      postalCode: "521452",
      mobile: "(+125) 1542-8452",
    },
    skills: [
      { name: "WordPress", percent: 84 },
      { name: "JavaScript", percent: 79 },
      { name: "HTML", percent: 95 },
      { name: "Figma", percent: 85 },
      { name: "Photoshop", percent: 70 },
      { name: "Illustration", percent: 65 },
    ],
    experience: [
      { role: "Full Stack Developer", company: "Shreethemes - India", years: "2019-22" },
      { role: "Back-end Developer", company: "CircleCI - U.S.A", years: "2017-19" },
    ],
    socialMedia: [
      { name: "Twitter", value: "Twitter Profile Name" },
      { name: "Instagram", value: "Instagram Profile Name" },
      { name: "LinkedIn", value: "LinkedIn Profile Name" },
    ],
  });

  const handleChange = (section, key, value, index = null) => {
    setFormData((prev) => {
      if (section === "personalDetails") {
        return { ...prev, personalDetails: { ...prev.personalDetails, [key]: value } };
      } else if (section === "skills") {
        const updatedSkills = [...prev.skills];
        updatedSkills[index][key] = value;
        return { ...prev, skills: updatedSkills };
      } else if (section === "experience") {
        const updatedExperience = [...prev.experience];
        updatedExperience[index][key] = value;
        return { ...prev, experience: updatedExperience };
      } else if (section === "socialMedia") {
        const updatedSocialMedia = [...prev.socialMedia];
        updatedSocialMedia[index].value = value;
        return { ...prev, socialMedia: updatedSocialMedia };
      }
      return { ...prev, [key]: value };
    });
  };

  const handleAddSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: "", percent: 0 }],
    }));
  };

  const handleDeleteSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleAddExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, { role: "", company: "", years: "" }],
    }));
  };

  const handleDeleteExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex min-h-screen p-8 bg-[#0d121e] text-white">
      {/* Left Side */}
      <div className="w-2/3 pr-6 overflow-y-auto">
        {/* Name */}
        {isEditing ? (
          <div>
            <label className="block text-gray-400 font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("", "name", e.target.value)}
              className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ) : (
          <h1 className="text-3xl font-bold">{formData.name}</h1>
        )}

        {/* About Me */}
        {isEditing ? (
          <div className="mt-4">
            <label className="block text-gray-400 font-medium">About Me</label>
            <textarea
              value={formData.aboutMe}
              onChange={(e) => handleChange("", "aboutMe", e.target.value)}
              className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
        ) : (
          <p className="text-gray-400 mt-2">{formData.aboutMe}</p>
        )}

        {/* Skills */}
        <h2 className="text-2xl font-semibold mt-6">Skills :</h2>
        <div className="mt-4 space-y-2">
          {formData.skills.map((skill, index) => (
            <div key={index}>
              {isEditing ? (
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => handleChange("skills", "name", e.target.value, index)}
                    className="w-1/2 p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Skill Name"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.percent}
                    onChange={(e) => handleChange("skills", "percent", parseInt(e.target.value), index)}
                    className="w-1/2"
                  />
                  <span className="text-gray-500">{skill.percent}%</span>
                  <button
                    onClick={() => handleDeleteSkill(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <>
                  <span className="block font-medium">{skill.name}</span>
                  <div className="w-full bg-gray-700 rounded h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              onClick={handleAddSkill}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Skill
            </button>
          )}
        </div>

        {/* Experience */}
        <h2 className="text-2xl font-semibold mt-6">Experience :</h2>
        <div className="mt-4 space-y-4">
          {formData.experience.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow">
              {isEditing ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => handleChange("experience", "role", e.target.value, index)}
                    className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Role"
                  />
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleChange("experience", "company", e.target.value, index)}
                    className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Company"
                  />
                  <input
                    type="text"
                    value={exp.years}
                    onChange={(e) => handleChange("experience", "years", e.target.value, index)}
                    className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Years"
                  />
                  <button
                    onClick={() => handleDeleteExperience(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <span className="text-gray-500 text-sm">{exp.years}</span>
                </>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              onClick={handleAddExperience}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Experience
            </button>
          )}
        </div>

        {/* Social Media */}
        <h2 className="text-2xl font-semibold mt-6">Social Media :</h2>
        <div className="mt-4 space-y-4">
          {formData.socialMedia.map((social, index) => (
            <div key={index}>
              {isEditing ? (
                <div>
                  <label className="block text-gray-400 font-medium">{social.name}</label>
                  <input
                    type="text"
                    value={social.value}
                    onChange={(e) => handleChange("socialMedia", "value", e.target.value, index)}
                    className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : (
                <>
                  <label className="block text-gray-400 font-medium">{social.name}</label>
                  <p className="mt-1 text-white">{social.value}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Personal Details */}
      <div className="w-1/3 h-fit bg-gray-900 p-6 rounded shadow-lg sticky top-8">
        <h2 className="text-xl font-semibold text-white">Personal Detail:</h2>
        <ul className="mt-4 space-y-2 text-gray-400">
          {Object.entries(formData.personalDetails).map(([key, value]) => (
            <li key={key} className="capitalize">
              {isEditing ? (
                <div>
                  <span className="block font-medium">{key.replace(/([A-Z])/g, " $1")}</span>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange("personalDetails", key, e.target.value)}
                    className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : (
                `${key.replace(/([A-Z])/g, " $1")}: ${value}`
              )}
            </li>
          ))}
        </ul>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Resume;