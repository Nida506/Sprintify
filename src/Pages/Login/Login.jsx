// imports for components

import google from "../../assets/Google.png";
import slack from "../../assets/slack.png";
import sideBarImage1 from "../../assets/SideBarImage1.png";
import sideBarImage2 from "../../assets/SideBarImage2.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-between max-[776px]:justify-center   h-screen w-screen">
      {/* for left side image */}

      <div className="items-end  hidden md:flex pb-3">
        <img
          src={sideBarImage1}
          alt="side image"
          className="hidden min-[820px]:flex min-[820px]:w-[250px] min-[820px]:h-[250px] min-[1100px]:w-[400px] min-[1100px]:h-[400px]"
        />
      </div>

      {/* for form  */}

      <div className="mt-[130px] min-[776px]:ms-1 flex bg-white shadow-2xl justify-center h-fit w-[320px]">
        <div className=" card text-black  w-[320px]  min-1400px:w-[450px] max-w-96  flex-col items-center">
          <div className="card-body">
            {/* title */}
            <h1 className="card-title font-Roboto justify-center text-3xl font-bold cursor-pointer">
              Login
            </h1>
            {/* for email */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 "
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            {/* for password */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex justify-between items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  placeholder="Password"
                />
                {showPassword ? (
                  <VisibilityIcon
                    onClick={() => setShowPassword((prev) => !prev)}
                    className=" cursor-pointer "
                    fontSize="15"
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => setShowPassword((prev) => !prev)}
                    className=" cursor-pointer"
                    fontSize="15"
                  />
                )}
              </div>
            </label>
            {/* for button */}
            <div className="flex justify-center w-full bg-blue rounded text-white font-semibold text-[18px] cursor-pointer px-3 h-[41px]">
              <button className="">Login</button>
            </div>
            {/* Other options for sign in */}
            <div className="flex items-center justify-between w-full max-w-xs  ">
              <div className="border-t w-[57px] border-gray-300"></div>
              <p className="text-gray-700 text-center">Or Continue with</p>
              <div className="border-t w-[57px] border-gray-300"></div>
            </div>

            <div className="flex w-full justify-between items-center h-[50px]">
              <div className="w-[49%]  flex justify-center border rounded py-3 cursor-pointer">
                <img src={google} alt="Google Logo" />
              </div>
              <div className="w-[49%]  flex justify-center border rounded py-3 cursor-pointer">
                <img src={slack} alt="Google Logo" />
              </div>
            </div>

            <Link to={"/signup"} className="text-center text-[15px] mt-2">
              New To Sprintify?{" "}
              <span className="ms-1 font-bold cursor-pointer text-[17px]">
                Create Account
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* for right side image */}
      <div className=" items-end  hidden md:flex right-0 pb-3">
        <img
          src={sideBarImage2}
          alt="side image"
          className="hidden min-[820px]:flex min-[820px]:w-[250px] min-[820px]:h-[250px] min-[1100px]:w-[400px] min-[1100px]:h-[400px]"
        />
      </div>
    </div>
  );
};

export default Login;
