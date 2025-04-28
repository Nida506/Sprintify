import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { removeUser } from "../redux/userSlice"; // adjust path as necessary
// const BASE_URL = "https://yourapi.com"; // Replace with actual base URL
import { BASE_URL } from "@/utils/constants";
import { removeUser } from "@/Redux/UserSlice/userSlice";

const MainNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with real auth logic
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const closeMenu = () => setMenuOpen(false);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="bg-white font-outfit shadow-md px-5 sm:px-[40px] md:px-[100px] py-4 flex justify-between items-center">
      {/* Logo */}
      <NavLink to={user?.firstName ? "/" : "/signup"}>
        <h1
          className="md:text-4xl ps-10 lg:ps-0 text-2xl font-bold text-gray-900"
          data-aos="zoom-in"
        >
          Sprintify
        </h1>
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 text-gray-600">
        <li>
          <Link
            to={user?.firstName ? "/" : "/signup"}
            className="hover:text-blue-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={user?.firstName ? "/about" : "/signup"}
            className="hover:text-blue-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={user?.firstName ? "/blog" : "/signup"}
            className="hover:text-blue-700"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={user?.firstName ? "/contactus" : "/signup"}
            className="hover:text-blue-700"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to={user?.firstName ? "/workplace" : "/signup"}
            className="hover:text-blue-700"
          >
            Workspaces
          </Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {isAuthenticated && user?.firstName ? (
          <>
            <div className="form-control text-black font-semibold text-lg">
              Hi, {user?.firstName}
            </div>
            <div className="dropdown dropdown-end ms-1 me-3 flex">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle avatar border-2 border-blueish hover:border-blueish"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="w-10 rounded-full">
                  <img alt="User Avatar" src="images/profileImg.png" />
                </div>
              </div>

              {dropdownOpen && (
                <ul className="z-[6000] menu menu-sm text-white dropdown-content bg-black rounded-box  mt-10 border-2 border-blueish w-52 p-2 shadow">
                  {[
                    { name: "Profile", path: "/profile", badge: "New" },
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Blog", path: "/blog" },
                    { name: "Contact", path: "/contactus" },
                    { name: "Workspaces", path: "/workplace" },
                  ].map((item, index) => (
                    <li key={index} onClick={closeDropdown}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? "text-white px-3 py-1 rounded" : "mt-0.5"
                        }
                      >
                        {item.name}{" "}
                        {item.badge && (
                          <span className="badge">{item.badge}</span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        logoutHandler();
                        closeDropdown();
                      }}
                      className="mt-0.5 text-left w-full"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <div className="hidden lg:flex space-x-4">
            <NavLink to="/login">
              <button className="px-6 py-2 border border-gray-400 rounded-full">
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="px-6 py-2 border border-gray-400 rounded-full">
                Signup
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNavBar;
