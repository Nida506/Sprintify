import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { activeBoard } from "@/Redux/BoardsSlice/BoardsSlice";
import { useNavigate } from "react-router-dom";
const WorkPlaceMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const boards = useSelector((store) => store.boards.boards);
  console.log(boards);
  // const boards = [
  //   { id: 1, name: "Project Management", imgsrc: "images/card1.avif" },
  //   { id: 2, name: "Sales", imgsrc: "images/card2.avif" },
  //   { id: 3, name: "Productivity", imgsrc: "images/card3.avif" },
  //   { id: 4, name: "Remote Work", imgsrc: "images/card4.avif" },
  //   { id: 5, name: "Personal Engineering", imgsrc: "images/card5.avif" },
  // ];

  return (
    <div className="p-6 font-outfit w-full flex flex-col gap-[30px]">
      {/* Header */}

      <div>
        <div className="flex items-center  space-x-4">
          <img
            src={user?.photoUrl}
            alt="Profile"
            className="w-16 h-16 "
            data-aos="zoom-in"
          />
          <div>
            <h2 className="text-4xl font-semibold">
              {`${user?.firstName?.charAt(0).toUpperCase()}${user?.firstName
                ?.slice(1)
                .toLowerCase()}'s Workplace`}
            </h2>
            <span className="text-gray-500 text-sm">🔒 Private</span>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-semibold font-outfit text-gray-500">
        Boards
      </h1>
      {/* Filters */}
      {/* <div className="flex md:flex-row flex-col justify-between mb-6">
        <div className="flex md:flex-row flex-col md:space-x-4">
          <div className="flex flex-col gap-2 text-[16px] " data-aos="zoom-in">
            <p className="">Sort By</p>
            <select className="border text-gray-400 px-4 py-2 rounded-md">
              <option>Most Recently Active</option>
              <option>Alphabetical</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 text-[16px]" data-aos="zoom-in">
            <p className="">Filter By</p>
            <select className="border text-gray-400 px-4 py-2 rounded-md">
              <option>Most Recently Active</option>
              <option>Custom Filters</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2" data-aos="zoom-in">
          <p className="">Search By</p>
          <div className="flex border items-center px-4 py-2 rounded-md">
            <FaSearch className=" text-gray-400" />
            <input
              type="text"
              placeholder="Search Boards"
              className="outline-none"
            />
          </div>
        </div>
      </div> */}

      {/* Boards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 cursor-pointer grid-cols-1 gap-4">
        {boards.map((board) => (
          <div
            key={board._id}
            onClick={() => {
              dispatch(activeBoard(board._id));
              navigate("/dashboards");
            }}
            className="p-[30px] rounded-lg shadow-md text-white font-semibold"
            style={{
              backgroundColor: board.bgColor || "#ccc", // Use bgColor from the board
            }}
          >
            {board.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPlaceMain;
