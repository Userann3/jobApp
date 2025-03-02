import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react"; // Import icons
import img from "../assets/contact.png"; // Imported image

export default function Contact() {
  return (
    <section className="bg-[#0f172a] min-h-screen flex flex-col justify-center items-center px-6 py-10">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-10">
        {/* Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={img} // Using imported image
            alt="Contact Illustration"
            className="h-auto max-w-[500px] md:max-w-[600px] w-full"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-[#111827] p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Get in touch !</h2>

          <form className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name :"
                className="w-full p-3 bg-[#1e293b] text-white rounded-md border border-gray-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email :"
                className="w-full p-3 bg-[#1e293b] text-white rounded-md border border-gray-700 focus:outline-none"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject :"
              className="w-full p-3 bg-[#1e293b] text-white rounded-md border border-gray-700 focus:outline-none"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Message :"
              className="w-full p-3 bg-[#1e293b] text-white rounded-md border border-gray-700 focus:outline-none"
            ></textarea>

            {/* Send Message Button */}
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Details */}
      <div className="mt-16 max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="bg-[#1e293b] p-4 rounded-full shadow-lg">
            <PhoneCall className="text-cyan-500 w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mt-3">Phone</h3>
          <p className="text-gray-400 text-sm">Contact us anytime.</p>
          <a href="tel:+152534468854" className="text-cyan-400 font-semibold">
            +152 534-468-854
          </a>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="bg-[#1e293b] p-4 rounded-full shadow-lg">
            <Mail className="text-cyan-500 w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mt-3">Email</h3>
          <p className="text-gray-400 text-sm">Send us your queries.</p>
          <a href="mailto:contact@example.com" className="text-cyan-400 font-semibold">
            contact@example.com
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center">
          <div className="bg-[#1e293b] p-4 rounded-full shadow-lg">
            <MapPin className="text-cyan-500 w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mt-3">Location</h3>
          <p className="text-gray-400 text-sm">C/54 Northwest Freeway, Suite 558</p>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold">
            View on Google Map
          </a>
        </div>
      </div>
    </section>
  );
}
