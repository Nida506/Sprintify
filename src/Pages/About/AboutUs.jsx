import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutUs_pic1 from "../../assets/AboutUs_pic1.png";
import AboutUs_pic2 from "../../assets/AboutUs_pic2.png";
import AboutUs_Icon1 from "../../assets/AboutUs_Icon1.png";
import AboutUs_Icon2 from "../../assets/AboutUs_Icon2.png";
import AboutUs_Icon3 from "../../assets/AboutUs_Icon3.png";
import AboutUs_Icon4 from "../../assets/AboutUs_Icon4.png";
import AboutUs_Icon5 from "../../assets/AboutUs_Icon5.png";
import AboutUs_Icon6 from "../../assets/AboutUs_Icon6.png";
import AboutUs_Icon7 from "../../assets/AboutUs_Icon7.png";
import AboutUs_Icon8 from "../../assets/AboutUs_Icon8.png";
import AboutUs_Icon9 from "../../assets/AboutUs_Icon9.png";

const AboutUs = () => {
  const faqs = [
    {
      question: "What is Sprintify?",
      answer:
        "Sprintify is a project management tool that helps teams organize tasks and collaborate efficiently.",
    },
    {
      question: "Is Sprintify free to use?",
      answer:
        "Yes, Sprintify offers a free plan with essential features, and you can upgrade to premium plans for additional features.",
    },
    {
      question: "Can I use Sprintify for personal tasks?",
      answer: "Yes, Sprintify can be used for both personal and team projects.",
    },
    {
      question: "How do I collaborate with my team on Sprintify?",
      answer: "You can invite team members and assign tasks within Sprintify.",
    },
    {
      question: "What are Power-Ups in Sprintify?",
      answer: "Power-Ups are additional features that enhance productivity.",
    },
    {
      question: "Is Sprintify available on mobile?",
      answer: "Yes, Sprintify is available on both iOS and Android devices.",
    },
    {
      question: "Can I customize my Sprintify boards?",
      answer: "Yes, you can customize boards to fit your workflow.",
    },
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero bg-orange-100 py-11 px-6 md:px-8 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="text-section md:w-1/2 md:ml-0 lg:ml-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We Offer Teams To <br /> Organize, Prioritize <br /> And Manage
            Projects
          </h1>
          <ul className="space-y-2 text-lg md:text-xl">
            {[
              "Real-time collaboration",
              "Task Tracking and Due Date",
              "User Friendly Interface",
              "Customizable Workflows",
              "Drag and Drop Simplicity",
              "Mobile and Desktop Access",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a10 10 0 1 1-9.95 10.53A10 10 0 0 1 12 2zm-1.1 13.24l6.2-6.2a1 1 0 1 0-1.4-1.42l-5.5 5.5-2.3-2.3a1 1 0 1 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="image-section md:w-1/2 flex justify-start">
          <img
            src={AboutUs_pic1}
            className="w-[500px] max-w-lg object-contain mr-64"
            alt="Slack Image"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-11 px-6 md:px-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="image-section md:w-1/2 flex justify-center">
          <img src={AboutUs_pic2} alt="Why Choose Us" className="max-w-full" />
        </div>
        <div className="text-section md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Why Choose Sprintify?
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Choose Sprintify for its intuitive, visual interface that makes
            <br />
            projects more collaborative. Stay organized, boost productivity,
            <br />
            and streamline your workflows with ease and efficiency.
          </p>
        </div>
      </section>

      {/* Horizontal Line */}
      <hr className="border-t-1 border-gray-300 mx-auto my-6 md:my-8 max-w-4xl" />

      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 text-center flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl w-full">
          {[
            {
              text: "Organize tasks efficiently with our user-friendly boards.",
              icon: AboutUs_Icon1,
            },
            {
              text: "Collaboration, productivity, and management at one place.",
              icon: AboutUs_Icon2,
            },
            {
              text: "Track time and add personalized tools to your boards.",
              icon: AboutUs_Icon3,
            },
            { text: "100% secure chats and meetings.", icon: AboutUs_Icon4 },
          ].map((feature, index) => (
            <div key={index} className="feature flex flex-col items-center">
              <img
                src={feature.icon}
                alt="Feature Icon"
                className="w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-4"
              />
              <p className="text-sm md:text-base">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQS section */}
      <section className="flex flex-col items-center bg-[#F9F6F1] w-full py-12 md:py-[85px]">
        <div className="flex flex-col items-center gap-6 md:gap-[40px] w-full px-4 sm:px-6 md:px-8">
          {" "}
          {/* Removed max-w-xl */}
          <h2 className="text-[#141414] text-2xl sm:text-3xl md:text-[48px] font-bold leading-normal text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col items-start gap-4 w-full">
            {faqs.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1443] text-gray-400 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {" "}
          {/* Moved md:grid-cols-3 */}
          {/* Services Section */}
          <div className="md:ml-0 md:pl-0">
            <h3 className="text-lg text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Meeting
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="md:ml-0 md:pl-0">
            <h3 className="text-lg text-white font-semibold mb-4">
              Social Media
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Twitter ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
          {/* Contacts Section */}
          <div className="md:ml-0 md:pl-0">
            <h3 className="text-lg text-white font-semibold mb-4">Contacts</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <img src={AboutUs_Icon5} className="w-6 h-6" alt="Phone Icon" />
                <span>
                  +91-9837366124 <br />
                  +91-8650074147
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src={AboutUs_Icon6} className="w-6 h-6" alt="Email Icon" />
                <span>uswemsunali3@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src={AboutUs_Icon7}
                  className="w-6 h-6"
                  alt="Location Icon"
                />
                <span>
                  257 Fireweed Ln, Ketchikan,
                  <br /> Alaska 99901, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-6xl mx-auto mt-8 border-t border-gray-500 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2023 Webtechsolution.in
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a href="#" className="text-sm hover:underline text-gray-400">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-sm hover:underline text-gray-400">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full bg-white p-5 rounded-lg shadow-md"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{question}</h3>
        <div className="w-4 h-4 flex items-center justify-center rounded-full border border-black text-black cursor-pointer">
          {isOpen ? (
            <img src={AboutUs_Icon9} alt="Minus" className="w-4 h-4" />
          ) : (
            <img src={AboutUs_Icon8} alt="Plus" className="w-4 h-4" />
          )}
        </div>
      </div>
      {isOpen && <p className="mt-3 text-gray-600">{answer}</p>}
    </div>
  );
};

export default AboutUs;
