import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import saveAs from 'file-saver';

function MessagesContainer({ previousMessages }) {
  const [messages, setMessages] = useState(previousMessages);
  const user = useSelector((store) => store.user);
  const chatRef = useRef(null);
  const { currentChatData } = useSelector((store) => store.chat);

  useEffect(() => {
    // Scroll to the bottom when new messages arrive
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [currentChatData]);

  useEffect(() => {
    // Initial scroll to bottom
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  const downloadImage = (imageURL) => {
    saveAs(imageURL, 'downloadImage');
  };

  const formattedMessages = currentChatData.messages?.map((msg) => {
    const date = new Date(msg.createdAt);
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return { ...msg, time: `${hours}:${minutes} ${ampm}` };
  });

  return (
    <div
      className="rounded-lg pb-[10px] flex flex-col border-black flex-1 md:pb-[40px] space-y-2 px-2 bg-white  
      w-full overflow-y-auto scrollbar-custom"
      ref={chatRef}
    >
      {formattedMessages?.map((msg, index) => (
        (msg.imageURL || msg.text) && (
          <div
            key={index}
            className={`bg-white ${msg?.senderId?._id === user?._id ? 'text-white chat chat-end' : 'text-black chat chat-start'}`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full ring-2 ring-black">
                <img alt="User avatar" src={msg?.senderId?.photoUrl} />
              </div>
            </div>

            {/* ===== Text Message ===== */}
            {msg?.text && !msg.imageURL ? (
              <>
                <div className="chat-header">
                  <time className="text-xs opacity-50 text-black">{msg.time}</time>
                </div>
                <div
                  className={`chat-bubble ${
                    msg?.senderId?._id === user?._id ? 'bg-blue-600 text-white' : 'text-black bg-slate-300'
                  }`}
                >
                  {msg.text}
                </div>
                <div className="chat-footer opacity-50 text-black">Delivered</div>
              </>
            ) : (
              /* ===== Image Message ===== */
              <div>
                <div className="flex">
                  <div className="flex flex-col gap-1">
                    <div
                      className={`flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 ${
                        msg?.senderId?._id === user?._id ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                      } rounded-e-xl rounded-es-xl`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`text-sm font-semibold ${
                            msg?.senderId?._id === user?._id ? 'text-white' : 'text-black'
                          }`}
                        >
                          {msg.senderId.firstName} {msg.senderId.lastName}
                        </span>
                        <span
                          className={`text-sm font-normal ${
                            msg?.senderId?._id === user?._id ? 'text-white' : 'text-black'
                          }`}
                        >
                          {msg.time}
                        </span>
                      </div>
                      {msg.text && (
                        <p
                          className={`text-sm font-normal ${
                            msg?.senderId?._id === user?._id ? 'text-white' : 'text-black'
                          }`}
                        >
                          {msg.text}
                        </p>
                      )}
                      {msg.imageURL && (
                        <div className="group relative my-2.5">
                          <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <button
                              onClick={() => downloadImage(msg.imageURL)}
                              className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50"
                            >
                              <svg
                                className="w-5 h-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                />
                              </svg>
                            </button>
                          </div>
                          <img src={msg.imageURL} className="rounded-lg" />
                        </div>
                      )}
                      <span
                        className={`text-sm font-semibold text-gray-500 ${
                          msg?.senderId?._id === user?._id ? 'text-white' : 'text-black'
                        }`}
                      >
                        Delivered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      ))}
    </div>
  );
}

export default MessagesContainer;
