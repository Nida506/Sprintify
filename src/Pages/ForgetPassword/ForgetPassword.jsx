import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ForgetPassword = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    try {
      if (password != confirmNewPassword)
        throw new Error("Passwords do not match");
      const res = await axios.post(
        BASE_URL + "/forgotPassword",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      toast.success(
        <div>
          <span className="font-semibold">{res.data}</span>
        </div>
      );
    } catch (err) {
      const errorMessage =
        err.response?.data || err.message || "Something went wrong";
      toast.error(
        <div>
          <span className="font-semibold">{errorMessage}</span>
        </div>
      );
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen py-[50px] bg-black text-white flex flex-col lg:items-center justify-start pt-[200px] lg:pt-0 lg:justify-center relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute right-[340px] top-[80px] z-0 w-[200px] h-[200px] rounded-full bg-gradient-to-b from-pink-400 to-blue-600"></div>
        <div className="absolute bottom-[3px] right-[10px] w-[200px] h-[200px] rounded-full bg-gradient-to-b from-blue-600 to-pink-400"></div>

        <div className="flex w-full max-w-7xl items-start justify-around lg:items-center">
          {/* Left Section */}
          <div className="w-full lg:pr-20 flex-col justify-start hidden px-5 lg:flex">
            <h2 className="text-6xl font-semibold mb-8 leading-tight">
              No Worries!
            </h2>
            <NavLink
              to="/login"
              className="flex items-center w-full justify-start"
            >
              <button className="w-[200px] mt-1 border border-white px-6 py-3 text-white font-medium hover:bg-white hover:text-black transition">
                Take me Back!
              </button>
            </NavLink>
          </div>

          {/* Form Section */}
          <div className="w-[360px] px-12 py-10 lg:w-2/5 h-[400px] bg-opacity-20 backdrop-blur-lg p-5 rounded-3xl shadow-2xl border-2 border-white/50">
            <h3 className="text-3xl font-semibold mb-4">Forgot Password?</h3>

            <form onSubmit={resetPasswordHandler}>
              <div className="relative mb-2 mt-2">
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div className="relative mb-2 mt-2">
                <input
                  type={!showPassword1 ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword1(!showPassword1)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  {showPassword1 ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>

              <div className="relative mb-2 mt-2">
                <input
                  type={showPassword2 ? "text" : "password"}
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword2(!showPassword2)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  {showPassword2 ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r my-2 from-blue-600 to-pink-800 py-2 rounded-md text-lg font-semibold text-white hover:opacity-90 transition"
              >
                Reset Password
              </button>
            </form>

            <Link
              to="/login"
              className="text-white hover:underline hover:text-blue-500 text-center block mt-2 font-semibold"
            >
              Login?
            </Link>

            <p className="text-center text-gray-400">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="hover:underline hover:text-blue-500 text-white font-semibold"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
