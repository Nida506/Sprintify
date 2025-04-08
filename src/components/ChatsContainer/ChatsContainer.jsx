import ChatHeader from './ChatHeader';
import MessageInputBar from './MessageInputBar';
import MessagesContainer from './MessagesContainer';

function ChatsContainer() {
  // Mock data for demonstration
  const mockChatData = {
    friendData: [{
      photoUrl: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      firstName: "John",
      lastName: "Doe"
    }]
  };

  return (
    <div  className=" bg-white overflow-hidden md:flex   duration-100  flex-1 flex flex-col h-screen">
      {/* Chat Header */}
      <ChatHeader contactData={mockChatData.friendData[0]} />
      
      {/* Messages Container */}
     
      <MessagesContainer />
      {/* Message Input Field */}
      <MessageInputBar />
    </div>
  );
}

export default ChatsContainer;