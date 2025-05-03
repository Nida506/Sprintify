<<<<<<< HEAD
import { useState } from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatPage from "@/Pages/ChatPage/ChatPage";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";

function Header(Props) {
  const [showModal, setShowModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendInvite = async () => {
    setLoading(true);
    console.log(Props.activeDashboard._id);
    console.log(Props.currentUser);
    try {
      const res = await axios.post(
        `${BASE_URL}/api/invitations/send-invite`,
        {
          email: inviteEmail,
          boardId: Props.activeDashboard._id,
          invitedBy: Props.currentUser._id,
        },
        { withCredentials: true }
      );
      setMessage("Invitation sent successfully!");
      setInviteEmail("");
    } catch (error) {
      console.error(error);
      setMessage("Failed to send invite.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center overflow-hidden bg-black bg-opacity-30 w-full px-9 h-[55px] shadow-2xl">
        <div className="left">
          <h1 className="font-semibold text-xl text-white ms-4">
            {Props.activeDashboard?.name}
          </h1>
        </div>
        <div className="right flex justify-around items-center gap-4 border-l px-4 ">
          <div className="avatar cursor-pointer">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Avatar"
              />
            </div>
          </div>

          <button className="bg-white flex text-black px-2 py-1 rounded-lg gap-1">
            <ChatPage />
          </button>

          <button
            className="bg-white flex text-black px-2 py-1 rounded-lg gap-1"
            onClick={() => setShowModal(true)}
          >
            <PersonAddAltIcon className="text-[35px] mb-1" />
            Share
          </button>

          <MoreVertIcon className="cursor-pointer" />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Invite to Board</h2>
            <input
              type="email"
              placeholder="Enter email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-4"
            />
            <div className="flex justify-between items-center">
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={handleSendInvite}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Invite"}
              </button>
              <button
                className="text-gray-600 hover:underline"
                onClick={() => {
                  setShowModal(false);
                  setMessage("");
                }}
              >
                Cancel
              </button>
            </div>
            {message && <p className="mt-3 text-sm">{message}</p>}
          </div>
        </div>
      )}
=======
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
    console.log(randomId);
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
>>>>>>> c2fe7223503f7dc99ea65b647d9bb092d119b760
    </>
  );
}

export default Header;
