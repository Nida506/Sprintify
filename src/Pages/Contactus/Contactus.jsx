import React, { useState } from "react";
import { Mail, User, Phone, FileText } from "lucide-react";
import MainFooter from "@/components/MainFooter/MainFooter";
import Contactus from "../../assets/ContactUs.png";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  // State for Complaints Form
  const [complaintsForm, setComplaintsForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State for Contact Form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Change handler for both forms
  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "complaints") {
      setComplaintsForm({ ...complaintsForm, [name]: value });
    } else {
      setContactForm({ ...contactForm, [name]: value });
    }
  };

  // Submit handler for both forms
  const handleSubmit = (formType) => {
    const form = formType === "complaints" ? complaintsForm : contactForm;
    const isEmpty = Object.values(form).some((val) => val.trim() === "");

    if (isEmpty) {
      toast.error(
        <span className="font-semibold">Please fill all the fields</span>
      );
      return;
    }

    toast.success(
      <span className="font-semibold">Message Sent Successfully</span>
    );
    // Optional: Clear form
    if (formType === "complaints") {
      setComplaintsForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-screen min-h-screen bg-white pt-[80px] lg:pt-[30px] pb-0 overflow-x-hidden">
        {/* Complaints Section */}
        <section className="w-full min-h-[650px] flex justify-center items-center bg-white overflow-x-hidden">
          <div className="bg-white p-10 rounded-lg w-full max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-8">
              Your Complaints
            </h2>
            <form className="space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center border rounded-lg px-4 py-3">
                  <User className="text-gray-500" />
                  <input
                    name="name"
                    value={complaintsForm.name}
                    onChange={(e) => handleChange(e, "complaints")}
                    placeholder="Full name"
                    className="ml-3 w-full outline-none bg-transparent"
                  />
                </div>
                <div className="flex items-center border rounded-lg px-4 py-3">
                  <Mail className="text-gray-500" />
                  <input
                    name="email"
                    value={complaintsForm.email}
                    onChange={(e) => handleChange(e, "complaints")}
                    placeholder="Email address"
                    className="ml-3 w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center border rounded-lg px-4 py-3">
                  <Phone className="text-gray-500" />
                  <input
                    name="phone"
                    value={complaintsForm.phone}
                    onChange={(e) => handleChange(e, "complaints")}
                    placeholder="Phone number"
                    className="ml-3 w-full outline-none bg-transparent"
                  />
                </div>
                <div className="flex items-center border rounded-lg px-4 py-3">
                  <FileText className="text-gray-500" />
                  <input
                    name="subject"
                    value={complaintsForm.subject}
                    onChange={(e) => handleChange(e, "complaints")}
                    placeholder="Subject"
                    className="ml-3 w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              <div className="border rounded-lg px-4 py-3">
                <textarea
                  name="message"
                  value={complaintsForm.message}
                  onChange={(e) => handleChange(e, "complaints")}
                  placeholder="Write your message here..."
                  className="w-full outline-none p-2 bg-transparent"
                  rows="5"
                ></textarea>
              </div>
            </form>
            <div className="flex justify-center w-full mt-4">
              <button
                onClick={() => handleSubmit("complaints")}
                className="w-[300px] bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="overflow-x-hidden w-full min-h-[600px] flex flex-col lg:flex-row lg:justify-center lg:items-center bg-white">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={Contactus} className="w-1/2 h-1/2" alt="Contact Us" />
          </div>
          <div className="w-full lg:w-1/2 max-w-3xl bg-gray-100 p-10 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-center mb-8">
              Contact Form
            </h2>
            <form className="space-y-6 w-full">
              <input
                name="name"
                value={contactForm.name}
                onChange={(e) => handleChange(e, "contact")}
                placeholder="Name"
                className="w-full p-3 border rounded-lg outline-none bg-transparent"
              />
              <input
                name="email"
                value={contactForm.email}
                onChange={(e) => handleChange(e, "contact")}
                placeholder="Email address"
                className="w-full p-3 border rounded-lg outline-none bg-transparent"
              />
              <input
                name="phone"
                value={contactForm.phone}
                onChange={(e) => handleChange(e, "contact")}
                placeholder="Phone"
                className="w-full p-3 border rounded-lg outline-none bg-transparent"
              />
              <input
                name="subject"
                value={contactForm.subject}
                onChange={(e) => handleChange(e, "contact")}
                placeholder="Subject"
                className="w-full p-3 border rounded-lg outline-none bg-transparent"
              />
              <textarea
                name="message"
                value={contactForm.message}
                onChange={(e) => handleChange(e, "contact")}
                placeholder="Message"
                className="w-full p-3 border rounded-lg outline-none bg-transparent"
                rows="5"
              ></textarea>
            </form>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => handleSubmit("contact")}
                className="w-[300px] bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </section>

        <MainFooter />
      </div>
    </>
  );
};

export default ContactUs;
