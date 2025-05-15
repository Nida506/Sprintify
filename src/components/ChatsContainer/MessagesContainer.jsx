import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { BASE_URL } from '@/utils/constants';
import { addNewMessage, addPreviousMessages } from '@/Redux/BoardsSlice/BoardsSlice';
import saveAs from 'file-saver';
import Lottie from 'lottie-react';
import LoadingSpinner from '../../assets/LoadingSpinner.json';


function MessagesContainer({ messages = [] }) {
  const chatRef = useRef(null);
  const chatMessages = useSelector((store) => store.boards.chatMessages);
  const user = useSelector((store) => store.user);
  const activeDashboard = useSelector((store) => store.boards.active);
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(false);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // IMAGE DONWLOAD HANDLER
  const downloadImage = (imageURL) => {
    saveAs(imageURL, 'downloadImage');
  };

  // FORMATTED MESSAGES CHAT
  const formattedMessages = chatMessages?.map((msg) => {
    const isoString = msg.timestamp;

    // Convert to local time
    const date = new Date(isoString);

    // Format the time
    const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
    const minutes = date.getMinutes();
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    // Ensure two-digit minute formatting
    const formattedTime = `${hours}:${minutes
      .toString()
      .padStart(2, '0')} ${ampm}`;

    return { ...msg, time: formattedTime };
  });

  //GET ALL THE PREVIOUS CHAT MESSAGE
  const getPreviousMessages = async () => {
    if (!activeDashboard?._id) return;
 
    try {
      setLoading(true);
      let messages = await axios.get(
        BASE_URL + '/chat/getPreviousChat/' + activeDashboard?._id,
        { withCredentials: true }
      );
      console.log(messages);
      dispatch(addPreviousMessages(messages.data.messages?messages.data.messages:[]));
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPreviousMessages();
  }, [activeDashboard]);

  console.log(formattedMessages);
  return (
    <div
      className="rounded-lg   pb-4 flex flex-col flex-1 space-y-2 px-2  w-full overflow-y-auto scrollbar-custom"
      ref={chatRef}
    >
      {loading?   <div className='flex h-full justify-center items-center'> <Lottie className='h-[50px]' animationData={LoadingSpinner} /></div>:formattedMessages?.length ? formattedMessages?.map((msg, index) => {
        return (
          (msg.imageURL || msg.text) && (
            <div
              key={index}
              className={`bg-white ${
                msg?.senderId?._id === user?._id
                  ? ' text-white chat chat-end'
                  : ' text-black chat chat-start'
              } `}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full ring-2 ring-black ">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src={msg?.senderId?.photoUrl}
                  />
                </div>
              </div>

              {msg?.text && !msg.imageURL ? (
                <>
                  {/* ======= ============== ONLY TEXT MESSAE*/}

                  <div className="chat-header">
                    <time className="text-xs opacity-50 text-black">
                      {msg.time}
                    </time>
                  </div>
                  <div
                    className={`chat-bubble ${
                      msg?.senderId?._id === user?._id
                        ? 'bg-blue-600 text-white'
                        : 'text-black bg-slate-300'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div className="chat-footer opacity-50 text-black">
                    {msg?.senderId?.firstName} {msg?.senderId?.lastName} 
                  </div>
                </>
              ) : (
                <div>
                  <div className={`flex`}>
                    <div className="flex flex-col gap-1">
                      <div
                        class={`flex flex-col w-full max-w-[326px] leading-1.5 p-4  border-gray-200 ${
                          msg?.senderId?._id === user?._id
                            ? ' bg-blue-500 text-white'
                            : ' bg-gray-300 text-black'
                        } rounded-e-xl rounded-es-xl dark:bg-gray-700`}
                      >
                        <div class="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                          <span
                            class={`text-sm font-semibold ${
                              msg?.senderId?._id === user?._id
                                ? 'text-white'
                                : 'text-black'
                            }`}
                          >
                            {msg.senderId.firstName} {msg.senderId.lastName}
                          </span>
                          <span
                            class={`text-sm font-normal ${
                              msg?.senderId?._id === user?._id
                                ? 'text-white'
                                : 'text-black'
                            }`}
                          >
                            {msg.time}
                          </span>
                        </div>
                        {msg.text && (
                          <p
                            class={`text-sm font-normal ${
                              msg?.senderId?._id === user?._id
                                ? 'text-white'
                                : 'text-black'
                            }`}
                          >
                            {msg.text}
                          </p>
                        )}
                        {msg.imageURL && (
                          <div class="group relative my-2.5">
                            <div class="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                              <button
                                onClick={() => downloadImage(msg.imageURL)}
                                data-tooltip-target="download-image"
                                class="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                              >
                                <svg
                                  class="w-5 h-5 text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 16 18"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                                  />
                                </svg>
                              </button>
                              <div
                                id="download-image"
                                role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
                              >
                                Download image
                                <div
                                  class="tooltip-arrow"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                            <img src={msg.imageURL} class="rounded-lg" />
                          </div>
                        )}
                        <span
                          class={`text-sm font-semibold text-gray-500 dark:text-gray-400 ${
                            msg?.senderId?._id === user?._id
                              ? 'text-white'
                              : 'text-black'
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
        );
      }):<div className="flex items-center justify-center h-full text-black font-semibold text-[20px]"> <h1>Start chat Now 😊</h1> </div>}
    </div>
  );
}

export default MessagesContainer;
