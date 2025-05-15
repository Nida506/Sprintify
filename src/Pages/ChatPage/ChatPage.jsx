import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BsEmojiSmile, BsSend } from 'react-icons/bs';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { MessageSquareText } from 'lucide-react';
import ChatsContainer from '@/components/ChatsContainer/ChatsContainer';


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
    <div className="drawer drawer-end bg-white bg z-[5000]  overflow-hidden">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer z-0">
        <MessageSquareText className="text-[45px] mb-1 " />
        </label>
      </div>
      <div className="drawer-side overflow-hidden">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-white text-white shadow-md menu overflow-hidden  h-screen  w-screen  md:w-[500px] ">
      <ChatsContainer/>
      </div>
      </div>
    </div>
  );
}




export default ChatPage;
