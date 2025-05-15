import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import ImageIcon from '@mui/icons-material/Image';
import { useState, useRef, useEffect } from 'react';
import ImagePreview from './ImagePreview'; // Keep the ImagePreview for image display
import toast from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from '@/utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
import SocketContext from '@/Sockets/socketContext';
import { addNewMessage } from '@/Redux/BoardsSlice/BoardsSlice';

function MessageInputBar() {
  const [newMessage, setNewMessage] = useState({ id: '', text: '' });
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null); // store file
  const [emojiPicker, setEmojiPicker] = useState(false);
  const emojiRef = useRef();
  const fileImageRef = useRef(null);

  let { socket, connectSocket } = useContext(SocketContext);
  let dispatch = useDispatch();

  let user = useSelector((store) => store.user);
  let active = useSelector((store) => store.boards.active);

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
  }, []);

  useEffect(() => {
    if (!socket) connectSocket();
  }, []);

  const emojiHandler = (emoji) => {
    setNewMessage((prev) => ({ ...prev, text: prev.text + emoji.emoji }));
  };

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error('No file selected');
      return;
    }

    if (file.size > 1024 * 1024) {
      toast.error('Image size must be less than 1MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setSelectedImageFile(file); // store the actual file
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    setSelectedImageFile(null);
    if (fileImageRef.current) fileImageRef.current.value = '';
  };

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    if (!newMessage.text && !selectedImageFile) return;

    if (!socket?.connected) {
      connectSocket();
      socket?.emit('joinCollaboration', active?._id, user?._id);
    }

    try {
      const formData = new FormData();
      formData.append('board_id', active?._id);
      formData.append('msgText', newMessage.text);
      formData.append('userId', user?._id);
      if (selectedImageFile) {
        formData.append('image', selectedImageFile); // pass raw file
      }

      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await axios.post(`${BASE_URL}/sendMessage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      dispatch(addNewMessage(response.data.chatMessage));
      setNewMessage({ id: '', text: '' });
      removeImage(); // clears both preview and file
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message');
    }
  };

  return (
    <div className="w-[100%] transition-all duration-300">
      {imagePreview && (
        <ImagePreview image={imagePreview} removeImage={removeImage} />
      )}
      <form
        onSubmit={sendMessageHandler}
        className="flex px-3 mb-6 gap-3 w-full"
      >
        <div className="flex w-[100%] md:w-[100%] bg-zinc-200 border-black border-[0.5px] text-black rounded-md items-center md:gap-5 md:pr-5">
          <input
            type="text"
            className="w-full md:flex-1 p-3 md:p-5 bg-transparent border-none rounded-md focus:border-none focus:outline-none"
            placeholder="Enter Message"
            value={newMessage.text}
            onChange={(e) =>
              setNewMessage((prev) => ({ ...prev, text: e.target.value }))
            }
          />
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
            className="text-neutral-500 ml-3 md:ml-5"
          >
            <ImageIcon
              className={`text-xl md:text-2xl text-gray-500 ${
                imagePreview ? 'text-green-500' : ''
              }`}
            />
          </button>
          <div className="relative">
            <button
              type="button"
              onClick={() => setEmojiPicker(true)}
              className="text-neutral-500 ml-3"
            >
              <EmojiEmotionsIcon className="text-xl md:text-2xl text-grey" />
            </button>
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
        <button
          type="submit"
          className="bg-blue-600 rounded-md flex items-center justify-center p-3 md:p-5 hover:bg-blue-700 transition-all w-[40px] md:w-[50px] lg:w-[60px]"
        >
          <SendIcon className="text-xl md:text-2xl text-white" />
        </button>
      </form>
    </div>
  );
}

export default MessageInputBar;
