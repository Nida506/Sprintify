import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { BASE_URL } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "@/Redux/UserSlice/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signIn",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data.data));
      return navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen font-outfit bg-black text-white flex flex-col items-center relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute right-[10%] top-[5%] z-[-10] w-[100px] h-[100px] rounded-full bg-gradient-to-b from-pink-400 to-blue-600 md:right-[340px] md:top-[80px] md:w-[200px] md:h-[200px]"></div>
      {/* Bottom Circle with Smooth Gradient */}
      <div className="absolute bottom-[2%] right-[5%] w-[100px] h-[100px] rounded-full bg-gradient-to-b from-blue-600 to-pink-400 md:bottom-[3px] md:right-[10px] md:w-[200px] md:h-[200px]"></div>
      {/* Navbar */}

      {/* Main Section */}
      <div className="flex font-outfit w-full max-w-7xl items-center justify-between mt-8 px-4 md:px-10 flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 lg:pr-50 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Welcome Back
            <br />
            To Sprintify!
          </h2>
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-2/5 bg-opacity-20 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl border-2 border-white/50 mt-8 lg:mt-0">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">Login</h3>
          <p className="text-gray-400 mb-4">Glad you're back!</p>
          <form>
            <div className="mb-3">
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Username"
              />
            </div>
            <div className="relative mb-2">
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
            onClick={loginHandler}
            className="w-full mt-2 bg-gradient-to-r from-blue-600 to-pink-800 py-2 rounded-md text-lg font-semibold text-white hover:opacity-90 transition"
          >
            Login
          </button>

          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline text-center block mt-2"
          >
            Forgot password?
          </Link>

          <p className="text-center text-gray-400 mt-2">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
