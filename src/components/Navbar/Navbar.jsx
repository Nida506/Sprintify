import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// ---------------icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LoginIcon from "@mui/icons-material/Login";
import Sprintify_Logo from "../../assets/Sprintify_Logo.png";
import Aos from "aos";
import { DashboardCustomizeOutlined } from "@mui/icons-material";

function Navbar() {
  let [navDialogue, setNavDialogue] = useState(false);
  let [toggleDropDown, setToggleDropDown] = useState(false);
  let dropdownBtnRef = useRef();
  let navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  // --------Handlers

  let handleMenu = () => {
    setNavDialogue((ps) => !ps);
  };

  let handleDropDown = (e) => {
    e.preventDefault();

    setToggleDropDown((ps) => !ps);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownBtnRef.current &&
        !dropdownBtnRef.current.contains(event.target)
      ) {
        console.log("Clicked outside the button");
        // Call your function here
        setToggleDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <nav className="shadow-xl fixed w-full font-Roboto  z-[1000] top-[0%] flex justify-between items-center   bg-white h-[80px]  md:pe-12">
      <div
        className="h-full w-[200px] md:w-[250px] flex justify-center items-center bg-darkBlue"
        style={{
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
        }}
      >
        <Link
          className="flex text-white items-center text-[28px] gap-2 font-bold "
          to={"/"}
        >
          <img
            className="w-[45px] h-[45px]  rounded-[50px]"
            src={Sprintify_Logo}
          />
          Sprintify
        </Link>
      </div>

      {/* --------------------------------For large Screens -Menu */}
      <div className=" hidden md:flex gap-10 ">
        <Link className=" p-0 flex items-center text-[17px]" to={`/`}>
          Home
        </Link>

        <Link className="flex items-center text-[17px]" to={"/"}>
          About Us
        </Link>

        <Link className="flex items-center text-[17px]" to={"/"}>
          Dashboards
        </Link>
      </div>
      <div id="nav-menu" className="hidden md:flex gap-8 ">
        {/* -------------dropdown */}
        <Link to={"/signup"} className="font-medium text-[25px]">
          Sign up
        </Link>

        <Link
          to={"/login"}
          className="font-medium text-[22px] w-[auto] px-3  rounded bg-blue  text-white "
        >
          Login
        </Link>
      </div>

      {/* ------------------Small screen navbar bar content */}
      <div className="flex md:hidden h-full justify-around items-center w-[50px] me-4">
        <button className="" onClick={() => setNavDialogue(true)}>
          <MenuIcon sx={{ fontSize: 45 }} />
        </button>
      </div>

      {/* --------------for small screens side bar menu*/}
      {navDialogue && (
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="300"
          className=" fixed bg-white inset-0 z-[1000] md:hidden "
          onClick={() => setNavDialogue(false)}
        >
          <div id="nav-bar" className=" flex justify-between h-[80px] ">
            <div
              className="h-full w-[200px] flex justify-center items-center bg-darkBlue"
              style={{
                clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
                color: "white",
              }}
            >
              <Link className="flex  items-center text-[28px]  gap-2" to={"/"}>
                <img
                  className="w-[45px] h-[45px] font-semibold rounded-[50px] text-white"
                  src={Sprintify_Logo}
                />
                Sprintify
              </Link>
            </div>

            <button
              className="md:hidden font-bold me-4"
              onClick={(e) => {
                e.preventDefault();
                setNavDialogue(false);
              }}
            >
              {" "}
              <CloseIcon sx={{ fontSize: 30 }} />
            </button>
          </div>
          {/* -----------menu */}
          <div className="mt-6 p-3">
            <Link
              className="font-medium cursor-pointer m-1 p-3 py-2 flex items-center justify-between hover:bg-gray-50 rounded-lg"
              to="/"
            >
              <div className="flex items-center h-full w-full">
                <HomeIcon sx={{ fontSize: 30 }} />
                <label className="text-[20px] mt-1 ml-2">Home</label>
              </div>

              <ChevronRightIcon sx={{ fontSize: 30 }} />
            </Link>
            <div className="h-[1px] bg-black"></div>

            {/* About Us*/}
            <Link
              className="font-medium cursor-pointer m-1 p-3 py-2 flex items-center justify-between hover:bg-gray-50 rounded-lg"
              to="/"
            >
              <div className="flex items-center h-full w-full">
                <LanguageIcon sx={{ fontSize: 30 }} />
                <label className="text-[20px] mt-1 ml-2">About Us</label>
              </div>

              <ChevronRightIcon sx={{ fontSize: 30 }} />
            </Link>

            {/*---------Seperator Line */}
            <div className="h-[1px] bg-black"></div>

            {/*------- Dashboards */}
            <Link
              className="font-medium cursor-pointer m-1 p-3 py-2 flex items-center justify-between hover:bg-gray-50 rounded-lg"
              to="/"
            >
              <div className="flex items-center h-full w-full">
                <DashboardCustomizeOutlined sx={{ fontSize: 30 }} />
                <label className="text-[20px] mt-1 ml-2">Dashboards</label>
              </div>
              <ChevronRightIcon sx={{ fontSize: 30 }} />
            </Link>
            <div className="h-[1px] bg-black"></div>

            {/*-----User Login  button*/}

            <button className="block w-full bg-blue text-left text-white hover:bg-white hover:text-black">
              <Link
                className="font-medium cursor-pointer m-3   flex items-center justify-between  rounded-lg"
                to="/Login"
              >
                <LoginIcon sx={{ fontSize: 30 }} />
                <div className="flaex items-center h-full w-full  ">
                  <label className="text-[20px] mt-1 ml-2">LOGIN</label>
                </div>
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
