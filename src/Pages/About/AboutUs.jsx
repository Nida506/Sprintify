import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex justify-between p-4 shadow-md bg-white">
        <h1 className="text-xl font-bold">Sprintify</h1>
        <nav className="flex gap-4">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">About</a>
          <a href="#" className="text-gray-600">Blog</a>
          <a href="#" className="text-blue-500">Contact</a>
          <a href="#" className="text-blue-500">Workplace</a>
        </nav>
        <div className="flex gap-2">
          <button className="border border-gray-400 px-4 py-2 rounded-md">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Signup</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-orange-100 p-10 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            We Offer Teams To Organize, Prioritize And Manage Projects
          </h2>
          <ul className="space-y-2">
            {[
              "Real-time collaboration",
              "Task Tracking and due date",
              "User Friendly Interface",
              "Customizable Workflows",
              "Drag and Drop simplicity",
              "Mobile and Desktop Access",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-lg">
                <FaCheckCircle className="text-blue-600" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Sprintify */}
      <section className="p-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Why Choose Sprintify?</h2>
          <p className="text-gray-700">
            Choose Sprintify for its intuitive, visual interface that makes projects collaborative.
            Stay organized, boost productivity, and streamline your workflows with ease.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              "Organize tasks efficiently with user-friendly boards.",
              "Collaboration, productivity and management at one place.",
              "Track time and add personalized tools to your boards.",
              "100% secure chats and meetings.",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "What is Sprintify?", a: "Sprintify is a project management tool." },
            { q: "Is Sprintify free to use?", a: "Yes, Sprintify offers a free plan with essential features." },
            { q: "Can I use Sprintify for personal tasks?", a: "Yes, it is suitable for both personal and professional use." },
            { q: "How do I collaborate with my team on Sprintify?", a: "You can invite team members and assign tasks easily." },
            { q: "What are Power-Ups in Sprintify?", a: "Power-Ups allow additional integrations and features." },
          ].map((faq, index) => (
            <div key={index} className="border p-4 rounded-md bg-white">
              <h3 className="font-semibold">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-10 bg-blue-900 text-white">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold">Services</h3>
            <ul>
              <li>Dashboard</li>
              <li>Chat</li>
              <li>Meeting</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Social Media</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contacts</h3>
            <ul>
              <li>+91-9837366124</li>
              <li>uvesmursalin@gmail.com</li>
              <li>257 Fireweed Ln, Ketchikan, Alaska</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
