import React, { useEffect, useRef, useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';
import EmojiPicker from 'emoji-picker-react';
import ImagePreview from './ImagePreview';
import toast from 'react-hot-toast';

function MessageInputBar() {
  const [newMessage, setNewMessage] = useState('');
  const [image, setImage] = useState('');
  const [emojiPicker, setEmojiPicker] = useState(false);
  const emojiRef = useRef();
  const fileImageRef = useRef(null);

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

  const emojiHandler = (emoji) => {
    setNewMessage((prev) => prev + emoji.emoji);
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();
    if (!newMessage && !image) return;

    setNewMessage('');
    setImage('');
    if (fileImageRef.current) fileImageRef.current.value = '';
  };

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error('No file selected');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage('');
  };

  return (
    <div className="w-screen transition-all duration-300">
      {image && <ImagePreview image={image} removeImage={removeImage} />}
      <form onSubmit={sendMessageHandler} className="flex px-3 mb-6 gap-3 w-full">
        <div className="flex w-full md:w-[68%] bg-zinc-200 border-black border-[0.5px] text-black rounded-md items-center md:gap-5 md:pr-5">
          <input
            type="text"
            className="w-full p-3 md:p-5 bg-transparent border-none rounded-md focus:outline-none"
            placeholder="Enter Message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <input type="file" className="hidden" accept="image/*" onChange={imageChangeHandler} ref={fileImageRef} />
          <button type="button" onClick={() => fileImageRef.current?.click()} className="text-neutral-500 ml-3">
            <ImageIcon className={`text-xl md:text-2xl ${image ? 'text-green-500' : 'text-gray-500'}`} />
          </button>
          <div className="relative">
            <button type="button" onClick={() => setEmojiPicker(true)} className="text-neutral-500 ml-3">
              <EmojiEmotionsIcon className="text-xl md:text-2xl text-gray" />
            </button>
            {emojiPicker && (
              <div className="absolute bottom-14 right-0" ref={emojiRef}>
                <EmojiPicker onEmojiClick={emojiHandler} height={300} width={300} />
              </div>
            )}
          </div>
        </div>
        <button type="submit" className="bg-blue-600 rounded-md p-3 md:p-5 w-[50px] hover:bg-[#741bda]">
          <SendIcon className="text-xl md:text-2xl text-white" />
        </button>
      </form>
    </div>
  );
}

export default MessageInputBar;
