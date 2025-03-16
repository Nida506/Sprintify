import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BsEmojiSmile, BsSend } from 'react-icons/bs';
import { AiOutlinePaperClip } from 'react-icons/ai';

function ChatPage() {
  const user = useSelector((store) => store.user);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatInputRef = useRef(null);

  useEffect(() => {
    chatInputRef.current?.focus();
  }, []);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      senderId: {
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        photoUrl: user?.photoUrl,
      },
      text: message,
      createdAt: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* 🔹 Chat Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <img
            src={user?.photoUrl}
            alt="User"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white"
          />
          <span className="text-lg md:text-xl font-semibold">
            {user?.firstName} {user?.lastName}
          </span>
        </div>
        <div className="text-sm md:text-base text-gray-200">Online</div>
      </div>

      {/* 🔹 Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-white shadow-inner">
        <MessagesContainer previousMessages={messages} />
      </div>

      {/* 🔹 Chat Input Area */}
      <div className="p-4 bg-gray-200 border-t flex items-center space-x-2 md:space-x-3">
        {/* 📎 Attach File Button */}
        <button className="text-gray-600 hover:text-blue-600 transition p-2 md:p-3">
          <AiOutlinePaperClip size={22} />
        </button>

        {/* 😊 Emoji Picker */}
        <button className="text-gray-600 hover:text-yellow-500 transition p-2 md:p-3">
          <BsEmojiSmile size={22} />
        </button>

        {/* ✍️ Input Field */}
        <input
          ref={chatInputRef}
          type="text"
          className="flex-1 p-2 md:p-3 border rounded-full outline-none bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* 🚀 Send Button */}
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <BsSend size={20} />
        </button>
      </div>
    </div>
  );
}

// 🔹 Messages Container Component (Fully Responsive)
function MessagesContainer({ previousMessages }) {
  return (
    <div className="space-y-3">
      {previousMessages.map((msg, index) => (
        <div
          key={index}
          className={`flex items-start space-x-3 ${
            msg.senderId._id === 'self' ? 'justify-end' : 'justify-start'
          }`}
        >
          {msg.senderId._id !== 'self' && (
            <img
              src={msg.senderId.photoUrl}
              alt="User"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border"
            />
          )}
          <div
            className={`p-3 md:p-4 rounded-lg shadow text-sm md:text-base max-w-[75%] md:max-w-md lg:max-w-lg ${
              msg.senderId._id === 'self' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            <p className="font-semibold">
              {msg.senderId.firstName} {msg.senderId.lastName}
            </p>
            <p>{msg.text}</p>
            <p className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleTimeString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatPage;
