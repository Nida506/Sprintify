import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MainNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with real auth logic

  // Function to close menus
  const closeMenu = () => setMenuOpen(false);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <nav className="bg-white font-outfit shadow-md px-5 sm:px-[40px] md:px-[100px] py-4 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/">
        <h1
          className="md:text-4xl ps-10 lg:ps-0 text-2xl font-bold text-gray-900"
          data-aos="zoom-in"
        >
          Sprintify
        </h1>
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6 text-gray-600">
        {["Home", "About", "Blog", "Contact", "Workspaces"].map(
          (item, index) => (
            <NavLink
              key={index}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-700 px-3 py-1 rounded"
                  : "hover:text-blue-700"
              }
            >
              <li>{item}</li>
            </NavLink>
          )
        )}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          // Show user dropdown when logged in on all the screens
          <>
            <div className="form-control text-black font-semibold text-lg">
              Hi, Nida
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
                <ul className="menu menu-sm text-white dropdown-content bg-black rounded-box z-[1] mt-10 border-2 border-blueish w-52 p-2 shadow">
                  {[
                    { name: "Profile", path: "/profile", badge: "New" },
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Blog", path: "/blog" },
                    { name: "Contact", path: "/contact" },
                    { name: "Workplace", path: "/workplace" },
                    { name: "Logout", path: "/" },
                  ].map((item, index) => (
                    <li key={index} onClick={closeDropdown}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "text-white bg-blue-700 px-3 py-1 rounded"
                            : "mt-0.5"
                        }
                      >
                        {item.name}{" "}
                        {item.badge && (
                          <span className="badge">{item.badge}</span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        ) : (
          // Show Login & Signup buttons when not logged in on desktop
          <div className="hidden lg:flex space-x-4">
            <NavLink to="/login">
              <button className="px-6 py-2 border border-gray-400 rounded-full">
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="px-6 py-2 bg-[#091954] text-white rounded-full">
                Signup
              </button>
            </NavLink>
          </div>
        )}
      </div>

      {/* Mobile Menu when not logged in  */}
      {menuOpen && (
        <div className="absolute bg-[#FAF7F2] top-16 left-0 w-full shadow-md p-6 flex-col items-start space-y-6 lg:hidden">
          {/* Mobile Login/Signup for logged-out users */}
          {!isAuthenticated && (
            <div className="flex flex-col space-y-3 w-full items-center">
              <NavLink to="/login" onClick={closeMenu} className="w-3/4">
                <button className="px-5 py-2 border border-gray-400 rounded-full w-full">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup" onClick={closeMenu} className="w-3/4">
                <button className="px-5 py-2 bg-[#091954] text-white rounded-full w-full">
                  Signup
                </button>
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default MainNavBar;
