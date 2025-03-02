import React, { useState } from "react";

export default function SignupDesign() {
  const [role, setRole] = useState("employee");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1e293b] p-6">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg shadow-lg bg-gray-800 text-white">
        {/* Left Side - Form */}
        <div className="w-1/2 p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">J</span>
            </div>
            <h1 className="text-2xl font-semibold">Get Started</h1>
          </div>
          <p className="text-gray-400 mb-6">
            Welcome to JobPortal - Create your account and find your dream job
          </p>
          
          {/* Role Selection Buttons */}
          <div className="flex justify-center gap-4 mb-4">
            <button
              className={`px-4 py-2 rounded-md transition ${
                role === "employee" ? "bg-cyan-600 text-white" : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setRole("employee")}
            >
              Employee
            </button>
            <button
              className={`px-4 py-2 rounded-md transition ${
                role === "employer" ? "bg-cyan-600 text-white" : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setRole("employer")}
            >
              Employer
            </button>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none"
            />
            {role === "employer" && (
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none"
              />
            )}
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-500 transition"
            >
              Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>

          <p className="text-gray-400 text-sm text-center mt-4">
            Already have an account? <span className="text-cyan-400 cursor-pointer hover:underline">Log in</span>
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-1/2 bg-cyan-600 text-white p-8 flex flex-col justify-center items-center relative">
          <h2 className="text-3xl font-semibold italic">Find Your Dream Job</h2>
          <p className="text-xl">Start your career today</p>
          
          <div className="mt-6 bg-white p-4 rounded-lg shadow-lg w-3/4 text-black">
            <p className="text-lg font-semibold">Thousands of Opportunities</p>
            <p className="text-sm text-gray-600">Browse jobs from top companies</p>
            <div className="flex justify-between mt-4">
              <p className="text-sm">Active Employers</p>
              <p className="text-lg font-bold">5,246+</p>
            </div>
            <p className="text-xs text-gray-500">Join now and start applying!</p>
          </div>
        </div>
      </div>
    </div>
  );
}