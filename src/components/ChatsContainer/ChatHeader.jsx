import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const ChatHeader = ({ contactData }) => {
  // Simulated close handler
  const closeChat = () => {
    console.log('Chat closed');
  };

  return (
    <div className="w-full flex items-center justify-between p-4 border-b-[0.1px] border-gray-500/10 bg-white h-[80px]">
      {/* Avatar and Info */}
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 flex-shrink-0 rounded-full ring-2 ring-[#fe3c72] overflow-hidden">
          <img
            src={contactData?.photoUrl}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* User Info */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-[17px] text-black">
            {contactData?.firstName} {contactData?.lastName}
          </h2>
          <span className="text-sm text-gray-400">
            Online {/* Static status for demo */}
          </span>
        </div>
      </div>

      {/* Close Button */}
      <CancelIcon 
        className="text-black hover:text-gray-600 cursor-pointer transition-colors"
        onClick={() => {
            document.getElementById("my-drawer-4").checked = false; // This will uncheck the checkbox and close the drawer
          }}
      />
    </div>
  );
};

export default ChatHeader;