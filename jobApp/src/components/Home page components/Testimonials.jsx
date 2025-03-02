import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "David Matin",
    role: "Student",
    text: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    bg: "bg-purple-700",
    size: "col-span-2", // Big card
  },
  {
    name: "Sarah Adams",
    role: "Designer",
    text: "The team was very supportive and kept me motivated throughout the course. I am now working as a mobile engineer for a big company!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    bg: "bg-gray-700",
    size: "col-span-1", // Small card
  },
  {
    name: "John Doe",
    role: "Developer",
    text: "Awesome teaching support from TAs who did the bootcamp themselves. Learning from their experience was super helpful!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    bg: "bg-black",
    size: "col-span-1", // Small card
  },
  {
    name: "Emma Wilson",
    role: "Engineer",
    text: "An overall wonderful and rewarding experience. I now have a job I really enjoy and make a good living doing something I love.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    bg: "bg-white text-black",
    size: "col-span-2", // Small card
  },
  {
    name: "Michael Scott",
    role: "Manager",
    text: "Such a life-changing experience. Highly recommended! The course really helped me land multiple job offers!",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    bg: "bg-gray-600",
    size: "col-span-2", // Big card
  },
  // Additional testimonials for horizontal filling
  {
    name: "Laura Smith",
    role: "Product Manager",
    text: "The course was well-structured and covered all the essential topics. I landed a job within a month of completing it!",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    bg: "bg-blue-700",
    size: "col-span-1", // Small card
  }
];

export default function TestimonialGrid() {
  return (
    <div className="bg-[#0d121e] py-10 px-[100px] text-white ">
                      <h2 className="text-center text-4xl font-bold mb-7">What Our Users Say</h2>
                {/* <p className="text-center text-gray-400 mt-2">
                    Search all the open positions on the web. Get your personalized salary estimate.
                </p> */}
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-lg ${t.bg} ${t.size} relative flex flex-col h-full`}
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-4xl text-gray-300 opacity-30" />
            <p className="text-lg italic">{t.text}</p>
            <div className="mt-4 flex items-center space-x-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-300">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}