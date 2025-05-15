import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import {
  activeBoard,
  addBoard,
  fetchAllDashboards,
} from "@/Redux/BoardsSlice/BoardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dot } from "lucide-react";
import toast from "react-hot-toast";

function WorkPlaceSideBar() {
  const [showPopup, setShowPopup] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boards = useSelector((store) => store.boards.boards);

  const fetchBoards = async () => {
    try {
      const res = await axios.get(BASE_URL + "/getallboards", {
        withCredentials: true,
      });
      dispatch(fetchAllDashboards(res.data.boards));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddBoard = async () => {
    if (newBoardName.trim()) {
      try {
        const response = await axios.post(
          BASE_URL + "/createboard",
          { name: newBoardName, bgColor },
          { withCredentials: true }
        );
        dispatch(addBoard([response.data.data.board]));
        dispatch(activeBoard(response.data.data.board._id));
        setNewBoardName("");
        setBgColor("#ffffff");
        setShowPopup(false);
        navigate("/dashboards");
        toast.success("Board Added Successfully!");
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    fetchBoards(); // Fetch boards on component mount
  }, []);

  return (
    <div className="flex">
      {/* Sidebar Strip */}
      <div className="bg-[#010256] font-outfit w-[50px] flex flex-col justify-between items-center p-[10px]"></div>

      {/* Main Sidebar */}
      <div className="font-outfit bg-white flex flex-col gap-[20px] p-[20px] w-full md:w-[320px] overflow-hidden">
        {/* Profile Section */}
        <div
          data-aos="zoom-in"
          className="bg-[#3845B1] bg-opacity-[81%] text-white p-4 flex shadow-lg rounded-lg gap-4"
        >
          <img
            src="images/user1.png"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h3 className="font-semibold">Asia Workplace</h3>
            <p className="text-sm">Free</p>
          </div>
        </div>

        {/* Boards List */}
        <div className="p-4 bg-gray-100 rounded-md">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-[18px] mb-4 text-blue-800">
              Your Boards
            </h4>
            <FaPlus
              className="cursor-pointer hover:text-blue-500"
              onClick={() => setShowPopup(true)}
            />
          </div>

          <ul className="space-y-4">
            {boards.map((board, index) => (
              <li
                key={board._id || index}
                onClick={() => {
                  dispatch(activeBoard(board._id));
                  navigate("/dashboards");
                }}
                className="text-gray-700 flex items-center gap-2 text-[16px] font-medium cursor-pointer hover:text-blue-800"
              >
                <Dot />
                {board.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Create New Board Footer */}
        <p
          className="text-gray-700 flex pt-[10px] items-center gap-3 border-t-[1px] mt-[20px] border-t-gray-300 cursor-pointer hover:underline"
          onClick={() => setShowPopup(true)}
        >
          <FaPlus /> Create New Board
        </p>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px]">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Create New Board
            </h2>
            <input
              type="text"
              placeholder="Board Name"
              value={newBoardName}
              onChange={(e) => setNewBoardName(e.target.value)}
              className="w-full mb-3 p-2 border border-gray-300 rounded"
            />
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full mb-3 p-2 h-[40px] cursor-pointer border rounded"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBoard}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkPlaceSideBar;
