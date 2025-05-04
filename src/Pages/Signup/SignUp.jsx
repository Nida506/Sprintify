import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { BASE_URL } from "@/utils/constants";
import { addUser } from "@/Redux/UserSlice/userSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpHandler = async () => {
    console.log(firstName, lastName, emailId, password);
    try {
      console.log("hello");
      const res = await axios.post(
        BASE_URL + "/signup",

        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );

      toast.success(
        <div>
          <span className="font-semibold">{res.data.message}</span>
        </div>
      );
      dispatch(addUser(res.data.data));
      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    } catch (err) {
      console.error(err);
      const errorMessage =
        err?.response?.data || err.message || "Something went wrong";
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
      <div className="min-h-screen bg-black text-white flex flex-col items-center relative overflow-hidden">
        {/* Background Circles */}

        <div className="absolute right-[10%] top-[5%] z-[-10] w-[100px] h-[100px] rounded-full bg-gradient-to-b from-pink-400 to-blue-600 md:right-[340px] md:top-[80px] md:w-[200px] md:h-[200px]"></div>

        {/* Bottom Circle with Smooth Gradient */}
        <div className="absolute bottom-[2%] right-[5%] w-[100px] h-[100px] rounded-full bg-gradient-to-b from-blue-600 to-pink-400 md:bottom-[3px] md:right-[10px] md:w-[200px] md:h-[200px]"></div>

        {/* Main Section */}
        <div className="flex w-full   max-w-7xl items-center justify-between mt-7 px-4 md:px-10 flex-col lg:flex-row">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 lg:pr-50 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight">
              Sign up To Get
              <br />
              Started
            </h2>
          </div>

          {/* Signup Form */}
          <div className="w-full lg:w-2/5 bg-opacity-20 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl border-2 border-white/50 mt-8 lg:mt-0">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Signup</h3>
            <p className="text-gray-400 mb-4">
              Just some details to get you in!
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="First Name "
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="last Name"
                />
              </div>
              <div className="relative mb-3">
                <input
                  type="text"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </form>
            <button
              onClick={signUpHandler}
              className="w-full bg-gradient-to-r from-blue-600 to-pink-800 py-2 rounded-md text-lg font-semibold text-white "
            >
              Signup
            </button>
            <p className="text-center text-gray-400 mt-2">
              Already Registered?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
