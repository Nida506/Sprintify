import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/Google.png";
import slackIcon from "../../assets/slack.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen  bg-black text-white flex flex-col items-center relative overflow-hidden">
    

{/* Background Circles */}
<div className="absolute right-[340px] top-[80px] z-0 w-[200px] h-[200px] rounded-full bg-gradient-to-b from-pink-400 to-blue-600">
</div>

{/* Bottom Circle with Smooth Gradient */}
<div className="absolute bottom-[3px] right-[10px] w-[200px] h-[200px] rounded-full bg-gradient-to-b from-blue-600 to-pink-400">
</div>


      {/* Navbar */}
      <nav className="w-full bg-white text-black flex justify-between items-center px-10 py-4">
        <h1 className="text-2xl font-bold">Sprintify</h1>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/workplace" className="hover:underline">
            Workplace
          </Link>
        </div>
        <div className="flex gap-4">
          <button className="border border-black bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className=" border border-black px-4 py-2 rounded-full hover:bg-white-700 transition">
            Signup
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex w-full max-w-7xl items-center justify-between mt-8 px-10">
        {/* Left Section */}
        <div className="w-full pr-50">
          <h2 className="text-8xl font-bold mb-8 leading-tight text-center">
            Welcome Back
            <br />
            To Sprintify!
          </h2>
          <div className="w-full flex justify-end">
            <h3 className="text-gray-400">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</h3>
          </div>
          <button className=" ml-96 mt-1 border border-white px-6 py-3 text-white font-medium hover:bg-white hover:text-black transition">
            Login to get started
          </button>
        </div>

        {/* Login Form */}
        <div className="w-2/5 bg-opacity-20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border-2 border-white/50">
          <h3 className="text-3xl font-semibold mb-2">Login</h3>
          <p className="text-gray-400 mb-4">Glad you're back!</p>
          <form>
            <div className="mb-3">
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Username"
              />
            </div>
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-400">
                  Remember me
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-pink-800 py-2 rounded-md text-lg font-semibold text-white hover:opacity-90 transition"
            >
              Login
            </button>

            <Link to="/forgot-password" className="text-blue-600 hover:underline text-center block mt-2">
              Forgot password?
            </Link>
          </form>

          <div className="flex items-center my-2">
            <hr className="flex-grow border-t border-gray-400" />
            <p className="mx-4 text-center text-gray-400">Or</p>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          <div className="flex justify-center gap-1 my-4">
            <button className="p-3 bg-transparent hover:bg-gray-700 transition">
              <img src={googleIcon} alt="Google" className="w-8 h-8" />
            </button>
            <button className="p-3 bg-transparent hover:bg-gray-700 transition">
              <img src={slackIcon} alt="Slack" className="w-8 h-8" />
            </button>
          </div>

          <p className="text-center text-gray-400 mt-2">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
          <div className="flex justify-center items-center gap-4 text-gray-400 mt-1 text-sm">
  <Link to="/terms" className="hover:underline whitespace-nowrap">
    Terms & Conditions
  </Link>
  <Link to="/support" className="hover:underline whitespace-nowrap">
    Support
  </Link>
  <Link to="/customer-care" className="hover:underline whitespace-nowrap">
    Customer Care
  </Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
