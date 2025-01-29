import React from "react";
import AboutUs_pic1 from "../../assets/AboutUs_pic1.png";
import AboutUs_pic2 from "../../assets/AboutUs_pic2.png";
import Icon1 from "../../assets/AboutUs_Icon1.png";
import Icon2 from "../../assets/AboutUs_Icon2.png";
import Icon3 from "../../assets/AboutUs_Icon3.png";
import Icon4 from "../../assets/AboutUs_Icon4.png";

const AboutUs = () => {
  return (
    <div className="about-us">
    
      {/* Hero Section */}
      <section className="hero bg-orange-100 py-20 px-8 flex flex-col md:flex-row items-center">
  {/* Text Section */}
  <div className="text-section md:w-1/2">
    <h1 className="text-5xl font-bold mb-6">
      We Offer Teams To Organize, Prioritize And Manage Projects
    </h1>
    <ul className="pl-6 space-y-4 text-lg">
      {[ "Real-time collaboration", "Task Tracking and Due Date", "User Friendly Interface", "Customizable Workflows", "Drag and Drop Simplicity", "Mobile and Desktop Access" ]
        .map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-blue-700"
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

  {/* Right Image Section */}
  <div className="image-section md:w-1/2 flex justify-center">
    <img
      src={AboutUs_pic1}
      alt="About Us"
      className="w-full max-w-md rounded-lg shadow-lg"
    />
  </div>
</section>



      {/* Why Choose Us Section */}
      <section className="why-choose-us py-20 px-8 flex flex-col md:flex-row items-center">
        <div className="image-section md:w-1/2 flex justify-center">
          <img src={AboutUs_pic2} alt="Why Choose Us" className="max-w-full" />
        </div>
        <div className="text-section md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Why Choose Sprintify?</h2>
          <p className="text-lg text-gray-700">
            Choose Sprintify for its intuitive, visual interface that makes projects collaborative. Stay organized, boost productivity, and streamline your workflows with ease.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16 bg-gray-100 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="feature flex flex-col items-center">
          <img src={Icon1} alt="Feature 1" className="w-16 h-16 mb-4" />
          <p>Organize tasks efficiently with our user-friendly boards.</p>
        </div>
        <div className="feature flex flex-col items-center">
          <img src={Icon2} alt="Feature 2" className="w-16 h-16 mb-4" />
          <p>Collaboration, productivity, and management at one place.</p>
        </div>
        <div className="feature flex flex-col items-center">
          <img src={Icon3} alt="Feature 3" className="w-16 h-16 mb-4" />
          <p>Track time and add personalized tools to your boards.</p>
        </div>
        <div className="feature flex flex-col items-center">
          <img src={Icon4} alt="Feature 4" className="w-16 h-16 mb-4" />
          <p>100% secure chats and meetings.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;