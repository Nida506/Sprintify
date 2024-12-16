import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
function SignUp() {
    let [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full  h-screen flex  justify-center  pt-[60px] overflow-y-auto ">
      <div className="card text-black bg-white w-[320px]  mt-[60px] h-fit max-w-96 ">
        <div className="card-body ">
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
              <input
                type="text"
                className="grow "
                placeholder="First Name"
              />
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
              <input
                type="text"
                className="grow "
                placeholder="Last Name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
          <div>
            <label className="input input-bordered flex items-center gap-2 ">
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
              <div className="flex">
                <input
                  placeholder={
                   'Password'
                  }
                  type={showPassword ? 'text' : 'password'}
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
            <button className=" h-[40px] bg-[#0a16bf] rounded  btn-primary w-[150px] font-bold text-[20px] text-white">
              Sign Up
            </button>

            <p className="text-center text-[15px]">
              Don't have an account?
              <span className="text-blue-950 font-bold cursor-pointer text-[17px]">
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
