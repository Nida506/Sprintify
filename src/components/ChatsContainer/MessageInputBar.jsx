import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import ImageIcon from '@mui/icons-material/Image';
import { useState, useRef, useEffect } from 'react';
import ImagePreview from './ImagePreview'; // Keep the ImagePreview for image display
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from '@/utils/constants';
import { useSelector,useDispatch } from "react-redux";
import { useContext } from "react";
import SocketContext from '@/Sockets/socketContext';
import { addNewMessage } from '@/Redux/BoardsSlice/BoardsSlice';


function MessageInputBar() {

  const [newMessage, setNewMessage] = useState({ id: '', text: '' });
  const [imagePreview, setImagePreview] = useState(null);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const emojiRef = useRef();
  const fileImageRef = useRef(null);
  let { socket, connectSocket, disconnectSocket, userId } = useContext(SocketContext);
  let dispatch = useDispatch();
  let user= useSelector((store) => {
    return store.user;
  });
  let active = useSelector((store) => {
    return store.boards.active;
  });

  // Close the emoji picker if clicked outside of it
  useEffect(() => {
    function onClickOutsideHandler(event) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setEmojiPicker(false);
      }
    }

    document.addEventListener('mousedown', onClickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', onClickOutsideHandler);
    };
  }, [emojiRef]);

  // Emoji Handler
  const emojiHandler = (emoji) => {
    setNewMessage((prev) => ({ ...prev, text: prev.text + emoji.emoji }));
  };

  const sendMessageHandler =async (event) => {
    event.preventDefault();

    // If no message or image is provided, return early
    if (!newMessage.text && !imagePreview) return;
    if (!socket?.connected) {
      connectSocket();
      socket?.emit("joinCollaboration", activeDashboard._id, user?._id);
    }
    try
    {
      let response=await axios.post(BASE_URL + "/chat/sendMessage", {
        board_id: active?._id,
        msgText: newMessage.text,
        imageUrl: imagePreview,
        userId: user?._id,
      }, {
        withCredentials: true,
      });

      dispatch(addNewMessage(response.data.chatMessage));
      if (fileImageRef.current) {
        fileImageRef.current.value = '';
      }
  
      setNewMessage({
        id: '',
        text: '',
      });
      setImagePreview('');
     
    }catch(error)
    {
      console.log(error);
    }
    // You can handle the logic to display or process the message here
  
  };

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error('No file selected');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

  };

  const removeImage = () => {
    setImagePreview(null);
  };

  useEffect(() => {
    if (!socket)
      connectSocket();
  });

  return (
    <div className="w-[100%] transition-all duration-300">
      {imagePreview && <ImagePreview image={imagePreview} removeImage={removeImage} />}
      <form onSubmit={sendMessageHandler} className="flex px-3 mb-6 gap-3 w-full">
        <div className="flex w-[100%] md:w-[100%] bg-zinc-200 border-black border-[0.5px] text-black rounded-md items-center md:gap-5 md:pr-5">
          {/* Input Field */}
          <input
            type="text"
            className="w-full md:flex-1 p-3 md:p-5 bg-transparent border-none rounded-md focus:border-none focus:outline-none"
            placeholder="Enter Message"
            value={newMessage.text}
            onChange={(e) =>
              setNewMessage((prev) => ({ ...prev, text: e.target.value }))
            }
          />

          {/* Image Upload */}
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={imageChangeHandler}
            ref={fileImageRef}
            tabIndex={-1}
          />
          <button
            type="button"
            onClick={() => fileImageRef.current?.click()}
            className="text-neutral-500 ml-3 md:ml-5 focus:border-none focus:outline-none focus:text-grey-600 duration-300 transition-all"
          >
            <ImageIcon
              className={`text-xl md:text-2xl text-gray-500 ${imagePreview ? 'text-green-500' : ''}`}
            />
          </button>

          {/* Emoji Picker */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setEmojiPicker(true)}
              className="text-neutral-500 ml-3 focus:border-none focus:outline-none focus:text-black duration-300 transition-all"
            >
              <EmojiEmotionsIcon className="text-xl md:text-2xl text-grey" />
            </button>

            {/* Emoji Popup */}
            {emojiPicker && (
              <div className="absolute bottom-14 right-0" ref={emojiRef}>
                <EmojiPicker
                  theme="light"
                  autoFocusSearch={false}
                  onEmojiClick={emojiHandler}
                  open={emojiPicker}
                  height={300}
                  width={300}
                />
              </div>
            )}
          </div>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          onClick={sendMessageHandler}
          className="bg-blue-600 rounded-md flex items-center justify-center p-3 md:p-5 focus:border-none hover:bg-[#741bdal] focus:bg-[#741bdal] focus:outline-none focus:text-white duration-300 transition-all w-[40px] md:w-[50px] lg:w-[60px]"
        >
          <SendIcon className="text-xl md:text-2xl text-white" />
        </button>
      </form>
    </div>
  );
}

export default MessageInputBar;
