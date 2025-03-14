import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/Google.png';
import slackIcon from '../../assets/slack.png';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ForgetPassword = () => {

  return (
    <div className="min-h-screen py-[50px] bg-black text-white flex flex-col  lg:items-center justify-start pt-[200px] lg:pt-0 lg:justify-center relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute right-[340px] top-[80px]  z-0 w-[200px] h-[200px] rounded-full bg-gradient-to-b from-pink-400 to-blue-600"></div>

      {/* Bottom Circle with Smooth Gradient */}
      <div className="absolute bottom-[3px] right-[10px] w-[200px] h-[200px] rounded-full bg-gradient-to-b from-blue-600 to-pink-400"></div>

      {/* Main Section */}
      <div className="flex w-full max-w-7xl  min-h-full items-start justify-center  lg:justify-between lg:items-center lg:pt-0 lg:mt-8">
        {/* Left Section */}
        <div className="w-full lg:pr-50 flex-col justify-start hidden lg:flex">
          <h2 className="text-8xl font-bold mb-8 leading-tight ">
            No Worries!
          </h2>
          <div className='flex items-center w-full justify-start '>
            <button className="w-[200px] mt-1 border border-white px-6 py-3 text-white font-medium hover:bg-white hover:text-black transition">
              Take me Back!
            </button>
            <div className="w-full flex justify-start items-center overflow-hidden">
              <i className="text-gray-800 font-bold text-[25px]">
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - 
              </i>
            </div>
          
          </div>
        </div>

        {/* Login Form */}
        <div className=" w-[360px]  mt-[20px] lg:w-2/5 h-[450px] bg-opacity-20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border-2 border-white/50">
          <h3 className="text-3xl font-semibold mb-2">Forget Password?</h3>
          <i className=" text-white mb-2">Enter your email here..</i>
          <form>
            <div className="relative mb-2 mt-1">
              <input
                type='text'
                              id="password"
                              placeholder='example@gmail.com'
                className="w-full px-4 py-2 rounded-md  text-black border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r  from-blue-600  to-pink-800 py-2 rounded-md text-lg font-semibold text-white hover:opacity-90 transition"
            >
              Reset Password
            </button>

            <Link
              to="/login"
              className="text-white hover:underline text-center block mt-2 font-semibold"
            >
              Login?
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
            Don’t have an account?{' '}
            <Link
              to="/signup"
              className="hover:underline text-white font-semibold"
            >
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
            <Link
              to="/customer-care"
              className="hover:underline whitespace-nowrap"
            >
              Customer Care
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
