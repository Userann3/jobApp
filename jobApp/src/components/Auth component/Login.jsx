import React from "react";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1e293b] p-6">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg shadow-lg bg-gray-800 text-white">
        {/* Left Side - Form */}
        <div className="w-1/2 p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">J</span>
            </div>
            <h1 className="text-2xl font-semibold">Welcome Back</h1>
          </div>
          <p className="text-gray-400 mb-6">
            Login to JobPortal and continue your job search journey.
          </p>

          <form className="space-y-4">
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
            <div className="flex justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <span className="cursor-pointer text-cyan-400 hover:underline">
                Forgot password?
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-500 transition"
            >
              Login
            </button>
          </form>

          <p className="text-gray-400 text-sm text-center mt-4">
            Don't have an account? <span className="text-cyan-400 cursor-pointer hover:underline">Sign up</span>
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-1/2 bg-cyan-600 text-white p-8 flex flex-col justify-center items-center relative">
          <h2 className="text-3xl font-semibold italic">Find the Perfect Job</h2>
          <p className="text-xl">Log in and apply today</p>
          
          <div className="mt-6 bg-white p-4 rounded-lg shadow-lg w-3/4 text-black">
            <p className="text-lg font-semibold">Thousands of Jobs Available</p>
            <p className="text-sm text-gray-600">Connect with top companies</p>
            <div className="flex justify-between mt-4">
              <p className="text-sm">New Jobs Today</p>
              <p className="text-lg font-bold">238+</p>
            </div>
            <p className="text-xs text-gray-500">Don't miss out, apply now!</p>
          </div>
        </div>
      </div>
    </div>
  );
}