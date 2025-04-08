import { useEffect, useRef } from 'react';

function MessagesContainer({ messages = [] }) {
  const chatRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Mock download handler
  const downloadImage = (imageURL) => {
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'download.jpg';
    link.click();
  };

  // Dummy messages data
  const dummyMessages = [
    {
      id: 1,
      text: 'Hello there!',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      isSender: true,
      time: '10:00 AM',
      imageURL: '',
      senderName: 'John Doe',
    },
    {
      id: 2,
      text: 'Hi, how are you?',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      isSender: false,
      time: '10:05 AM',
      imageURL: '',
      senderName: 'Jane Smith',
    },
    {
      id: 3,
      text: '',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      isSender: true,
      time: '10:10 AM',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHvReosiVeMrnhJGOlXZE40_HNP2vL5acNpA&s',
      senderName: 'John Doe',
    },
    {
      id: 4,
      text: 'This is a picture I wanted to share!',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      isSender: false,
      time: '10:15 AM',
      imageURL: 'https://media.istockphoto.com/id/183765619/photo/green-fields-and-mounatins.jpg?s=612x612&w=0&k=20&c=bxHFYIZQdrwkgeKExOPrDG8j_RgLTeCwB3OywWOBv-A=',
      senderName: 'Jane Smith',
    },
  ];

  return (
    <div
      className="rounded-lg   pb-4 flex flex-col flex-1 space-y-2 px-2  w-full overflow-y-auto scrollbar-custom"
      ref={chatRef}
    >
      {dummyMessages.map((msg) => (
        <div
          key={msg.id}
          className={`bg-white ${
            msg.isSender ? 'text-white chat chat-end' : 'text-black chat chat-start'
          }`}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full ring-2 ring-black">
              <img
                alt="Profile"
                src={msg.avatar}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {msg.text && !msg.imageURL ? (
            <>
              <div className="chat-header">
                <time className="text-xs opacity-50 text-black">{msg.time}</time>
              </div>
              <div
                className={`chat-bubble ${
                  msg.isSender ? 'bg-blue-600 text-white' : 'text-black bg-slate-300'
                }`}
              >
                {msg.text}
              </div>
              <div className="chat-footer opacity-50 text-black">Delivered</div>
            </>
          ) : (
            <div className="flex">
              <div className="flex flex-col gap-1">
                <div
                  className={`flex flex-col w-full max-w-[326px] p-4 rounded-xl ${
                    msg.isSender ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-semibold">{msg.senderName}</span>
                    <span className="text-sm font-normal">{msg.time}</span>
                  </div>

                  {msg.text && (
                    <p className="text-sm font-normal">{msg.text}</p>
                  )}

                  {msg.imageURL && (
                    <div className="group relative w-[300px]">
                      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <button
                          onClick={() => downloadImage(msg.imageURL)}
                          className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none focus:ring-gray-50"
                        >
                          ↓
                        </button>
                      </div>
                      <img
                        src={msg.imageURL}
                        className="rounded-lg w-full h-48 object-cover"
                        alt="Attachment"
                      />
                    </div>
                  )}

                  <span className="text-sm font-semibold text-gray-500">Delivered</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MessagesContainer;
