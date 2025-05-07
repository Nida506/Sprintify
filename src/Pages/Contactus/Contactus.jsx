import React from "react";
import { Mail, User, Phone, FileText } from "lucide-react";
import MainFooter from "@/components/MainFooter/MainFooter";
import Contactus from "../../assets/ContactUs.png";

const ContactUs = () => {
  return (
    <div className="w-screen min-h-screen bg-white pt-[80px] lg:pt-[30px] pb-0 overflow-x-hidden">
      {/* Complaints Section */}
      <section className="w-full min-h-[650px] border-0 flex justify-center items-center bg-white overflow-x-hidden">
        <div className="bg-white p-10 rounded-lg  w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            Your Complaints
          </h2>

          <form className="space-y-6 w-full">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center border rounded-lg px-4 py-3 w-full">
                <User className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Full name"
                  className="ml-3 w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center border rounded-lg px-4 py-3 w-full">
                <Mail className="text-gray-500" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="ml-3 w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Phone & Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center border rounded-lg px-4 py-3 w-full">
                <Phone className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="ml-3 w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center border rounded-lg px-4 py-3 w-full">
                <FileText className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="ml-3 w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Message Box */}
            <div className="border rounded-lg px-4 py-3 w-full">
              <textarea
                placeholder="Write your message here..."
                className="w-full outline-none p-2 bg-transparent"
                rows="5"
              ></textarea>
            </div>

            {/* Submit Button */}
          </form>
          <div className="flex justify-center w-full mt-4">
            <button className="w-[300px] bg-blue-900 text-white py-3 rounded-lg font-semibold  hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className=" overflow-x-hidden w-full min-h-[600px] flex flex-col lg:flex-row lg:justify-center lg:items-center bg-white ">
        <div className="w-full lg:w-1/2 lg:h-1/2  flex justify-center items-center">
          <img src={Contactus} classname="w-1/2 h-1/2" alt="Contact Us" />
        </div>
        <div className=" w-full  lg:w-1/2 lg:h-1/2 max-w-3xl bg-gray-100 p-10 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Form</h2>
          <form className="space-y-6 w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg outline-none bg-transparent"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border rounded-lg outline-none bg-transparent"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border rounded-lg outline-none bg-transparent"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg outline-none bg-transparent"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-lg outline-none bg-transparent"
              rows="5"
            ></textarea>
          </form>
          <div className="flex justify-center mt-4">
            <button className="w-[300px] bg-blue-900 text-white py-3 rounded-lg font-semibold  hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <MainFooter />
    </div>
  );
};

export default ContactUs;
