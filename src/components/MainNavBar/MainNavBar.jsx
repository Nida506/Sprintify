
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const MainNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white font-outfit  shadow-md md:py-[20px] md:px-[100px] p-[20px] flex justify-between items-center">
      {/* Logo */}
      <h1 className="md:text-4xl text-2xl font-bold text-gray-900">Sprintify</h1>
       {/* Desktop Menu */}
       <ul className="hidden lg:flex space-x-6 text-gray-600">
        <li className="hover:text-blue-700 cursor-pointer">Home</li>
        <li className="hover:text-blue-700 cursor-pointer">About</li>
        <li className="hover:text-blue-700 cursor-pointer">Blog</li>
        <li className="hover:text-blue-700 cursor-pointer">Contact</li>
        <li className="hover:text-blue-700 cursor-pointer">Workspaces</li>
      </ul>
   {/* Buttons */}
   <div className="hidden lg:flex space-x-4">
        <button className="px-5 py-2 border-[1px] border-gray-400 rounded-full">Login</button>
        <button className="px-5 py-2 bg-[#091954] text-white rounded-full">
          Signup
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute bg-[#FAF7F2] top-16 left-0 w-full shadow-md p-6 flex flex-col items-center space-y-4 lg:hidden">
          <ul className="space-y-4 text-gray-600 text-lg">
            <li className="hover:text-blue-700 cursor-pointer">Home</li>
            <li className="hover:text-blue-700 cursor-pointer">About</li>
            <li className="hover:text-blue-700 cursor-pointer">Blog</li>
            <li className="hover:text-blue-700 cursor-pointer">Contact</li>
            <li className="hover:text-blue-700 cursor-pointer">Workspaces</li>
          </ul>
          <button className="px-5 py-2 border-[1px] border-gray-400 rounded-full">Login</button>
          <button className="px-5 py-2 bg-[#091954] text-white rounded-full">
             Signup
          </button>
        </div>
      )}
    </nav>
  );
};



export default MainNavBar
