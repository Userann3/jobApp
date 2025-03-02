import React from "react";
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-[100px] py-12 bg-[#0d121e] text-gray-400">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold">JobStack</h2>
          <p className="mt-2 text-sm">
            Helping you find the best opportunities. Explore top companies and apply with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-medium">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-white transition">Find Jobs</a></li>
            <li><a href="#" className="hover:text-white transition">Browse Companies</a></li>
            <li><a href="#" className="hover:text-white transition">Career Tips</a></li>
            <li><a href="#" className="hover:text-white transition">Post a Job</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-medium">Support</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-white text-lg font-medium">Get in Touch</h3>
          <p className="mt-3 flex items-center gap-2">
            <Mail size={18} /> support@jobstack.com
          </p>
          <p className="mt-2 flex items-center gap-2">
            <Phone size={18} /> +1 (234) 567-890
          </p>
          <p className="mt-2 flex items-center gap-2">
            <MapPin size={18} /> 123 Job Street, NY, USA
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition"><Facebook size={28} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Twitter size={28} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Linkedin size={28} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition"><Github size={28} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-700 pt-6 text-sm">
        &copy; {new Date().getFullYear()} JobStack. All Rights Reserved.
      </div>
    </footer>
  );
}
