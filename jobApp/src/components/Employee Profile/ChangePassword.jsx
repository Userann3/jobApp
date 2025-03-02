import React from "react";

const ChangePassword = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto flex flex-col  items-center ">
        <h2 className="text-2xl font-bold mb-6 self-start">Change Password</h2>
        <div className="bg-[#1a1f2e] w-full p-6 rounded-lg shadow-md border border-[#2c374f]">
        <div className="flex justify-between items-center mb-4">
        </div>
        <hr className="border-[#2c374f] mb-4" />

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-gray-300 block mb-1">Old Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-[#121826] text-white border border-[#2c374f] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 block mb-1">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-[#121826] text-white border border-[#2c374f] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-300 block mb-1">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-[#121826] text-white border border-[#2c374f] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-lg">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
