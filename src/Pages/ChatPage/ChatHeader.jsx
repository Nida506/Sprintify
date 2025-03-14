import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import { removeCurrentChatData } from '@/Redux/Slices/chatSlice';
import SocketContext from '@/Sockets/socketContext';
import { useNavigate } from 'react-router-dom';

const ChatHeader = ({ contactData }) => {
  let dispatch = useDispatch();
  let { onlineUsers } = useContext(SocketContext);  
  const navigate = useNavigate();

  const closeChat = () => {
    navigate("/chat", { replace: true });
    dispatch(removeCurrentChatData());
  };
  
  return (
    <div className="w-full flex items-center justify-between p-4 border-gray-500 border-b-[0.1px] border-opacity-10
     bg-white cursor-pointer text-white h-[80px]">
      <div className="flex">
        <div className="w-14 h-14 flex-shrink-0 rounded-full bg-blue-500 ring-2 ring-[#fe3c72] flex items-center text-xl font-bold">
          <img src={contactData?.photoUrl} className="w-full h-full rounded-full" />
        </div>
        <div className="ml-3 flex-grow">
          <h2 className="font-semibold text-[17px] text-black font-Roboto">
            {contactData?.firstName} {contactData?.lastName}
          </h2>
          <span className="text-sm text-gray-400">
            {onlineUsers?.includes(contactData._id) ? "Online" : "Last Seen: 24 min ago"}
          </span>
        </div>
      </div>
      <CancelIcon className='text-black' onClick={closeChat} />
    </div>
  );
};

export default ChatHeader;
