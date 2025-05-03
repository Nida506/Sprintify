import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SidebarTrigger } from "@/components/ShadcnComponents/sidebar";
import ChatPage from "@/Pages/ChatPage/ChatPage";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
function Header({ activeDashboard }) {
  const [copied, setCopied] = useState(false);

  const handleCreateMeeting = () => {
    // Generate random meeting link using Jitsi (or any other)
    const randomId = Math.random().toString(36).substring(2, 10);
    const meetingLink = `https://meet.jit.si/${randomId}`;
    // Copy to clipboard
    navigator.clipboard.writeText(meetingLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <>
      {copied && (
        <div className="toast toast-top toast-center ">
          <div className="alert alert-success bg-[white] border-pink-600 border-2 font-normal text-black">
            <span className="text-green-400 text-2xl">
              <FaCheckCircle />
            </span>
            <span className="font-semibold">
              Meeting link copied to clipboard!
            </span>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center overflow-hidden  bg-black bg-opacity-30 w-full px-9  h-[55px] shadow-2xl">
        <div className="left">
          <h1 className="font-semibold text-xl text-white ms-4">
            {activeDashboard?.name}
          </h1>
        </div>
        <div className="right flex justify-around items-center gap-4 border-l px-4 ">
          <div className="mt-2">
            <button onClick={handleCreateMeeting} className="">
              <img
                src="/images/jitsiMeet.png"
                alt="Meeting"
                className="w-10 h-10 rounded-full"
              />
            </button>
          </div>

          <button className="bg-white flex text-black  px-2 py-1 rounded-lg gap-1">
            <ChatPage />
          </button>

          <button className="bg-white flex text-black px-2 py-1 rounded-lg gap-1">
            <PersonAddAltIcon className="text-[35px] mb-1 " />
            <h1>Share</h1>
          </button>

          <MoreVertIcon className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Header;
