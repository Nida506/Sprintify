import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Google from "../../assets/Google.png";
import slack from "../../assets/slack.png";
import SideBarImage1 from "../../assets/SideBarImage1.png";
import SideBarImage2 from "../../assets/SideBarImage2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  let [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full  pt-[130px]  pb-0">
      <div className="w-full  flex justify-around">
        <div className="items-end h-[500px] hidden md:flex fixed left-0 bottom-3">
          <img
            src={SideBarImage1}
            className="hidden min-[820px]:flex min-[820px]:w-[250px] min-[820px]:h-[250px] min-[1100px]:w-[400px] min-[1100px]:h-[400px]"
          />
        </div>
        <div className="card text-black bg-white w-[320px]  min-[1400px]:w-[450px] h-fit max-w-96 shadow-2xl ">
          <div className="card-body">
            <div>
              <h2
                className={`card-title font-Roboto text-3xl justify-center font-bold cursor-pointer`}
              >
                Sign Up
              </h2>
            </div>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 "
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow " placeholder="First Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 "
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow " placeholder="Last Name" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <div>
              <label className="input input-bordered flex items-center   gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 "
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex flex-between w-full">
                  <input
                    placeholder={"Password"}
                    type={showPassword ? "text" : "password"}
                    className="grow"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!showPassword ? (
                    <VisibilityIcon
                      className=" mt-1 cursor-pointer"
                      fontSize="15"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => setShowPassword(!showPassword)}
                      className=" mt-1 cursor-pointer"
                      fontSize="15"
                    />
                  )}
                </div>
              </label>
            </div>

            <div className="card-actions justify-center ">
              <button className=" h-[40px] bg-blue rounded w-full  btn-primary font-semibold px-3 text-[18px] text-white">
                Agree And Register
              </button>

              {/* ---------Continue with Others Platforms */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between w-full max-w-xs  ">
                  <div className="flex-grow border-t w-[57px] border-gray-300"></div>
                  <p className="text-gray-700">Or Continue with</p>
                  <div className="flex-grow border-t w-[57px] border-gray-300"></div>
                </div>

                <div className="flex w-full justify-between items-center h-[50px]">
                  <div className="w-[49%]  flex justify-center border rounded py-3 cursor-pointer">
                    <img src={Google} alt="Google" />
                  </div>
                  <div className="w-[49%] flex justify-center border rounded  py-3 cursor-pointer">
                    <img src={slack} alt="Slack" />
                  </div>
                </div>

                <Link to={"/login"} className="text-center text-[15px] mt-2">
                  Already have an Account?
                  <span className="ms-1 font-bold cursor-pointer text-[17px]">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" items-end h-[500px] hidden md:flex fixed right-0 bottom-5 ">
          <img
            src={SideBarImage2}
            className="hidden min-[820px]:flex min-[820px]:w-[250px] min-[820px]:h-[250px] min-[1100px]:w-[400px] min-[1100px]:h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
