import { FaPlus} from 'react-icons/fa'; 
import {MdKeyboardArrowRight} from 'react-icons/md'


function WorkPlaceSideBar() {
  const boards = [
    "Project Management",
    "Sales",
    "Productivity",
    "Remote Work",
    "Personal Engineering",
  ];

  return (
    <div className='flex'>
          {/* part 1 */}
          <div className="bg-[#010256] font-outfit w-[50px] flex flex-col justify-between items-center p-[10px]">
          </div>

         {/* pert 2 */}
          <div className="font-outfit bg-white flex flex-col gap-[20px] p-[20px] w-full md:w-[320px]  overflow-hidden">
         {/* Profile Section */}
         <div data-aos="zoom-in" className="bg-[#3845B1] bg-opacity-[81%] text-white p-4 flex shadow-lg rounded-lg  gap-4">
        <img
          src="images/user1.png"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h3 className="font-semibold">{`Asia's Workplace`}</h3>
          <p className="text-sm">Free</p>
        </div>
         </div>

          {/* Boards List */}
        <div className="p-4 bg-gray-100 rounded-md">
             <div className='flex justify-between items-center'>
               <h4 className="font-semibold text-[18px] text-gray-800 mb-4">Your Boards</h4>
               <FaPlus/>
             </div>
        
          <ul className="space-y-4">
          {boards.map((board, index) => (
            <li
              key={index}
              data-aos="zoom-in"
              className="text-gray-700 flex items-center gap-2 text-[16px] font-medium cursor-pointer hover:text-blue-400"
            >
              <MdKeyboardArrowRight className='text-[18px]'/>
              {board}
            </li>
          ))}
        </ul>

         </div> 

           {/*create new board  */}
            {/* Create New Board */}
         <p className=" text-gray-700 flex pt-[10px] items-center gap-3 border-t-[1px] mt-[20px] border-t-gray-300 cursor-pointer hover:underline">
          <FaPlus/> Create New Board
        </p>
    </div>
    </div>
  )
}

export default WorkPlaceSideBar
