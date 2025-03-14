import React from 'react';
import { useSelector } from 'react-redux';
import ChatHeader from './ChatHeader';
import MessageInputBar from './MessageInputBar';
import MessagesContainer from './MessagesContainer';
import message_loading from '../../../assets/message_loading.json';
import Lottie from 'lottie-react';

function ChatsContainer() {
  let { currentChatData, messagesLoading } = useSelector((store) => store.chat);

  return (
    <div className="pt-[70px] bg-white overflow-hidden flex-1 md:flex flex flex-col h-screen duration-100">
      {messagesLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Lottie animationData={message_loading} />
        </div>
      ) : (
        <>
          <ChatHeader contactData={currentChatData?.friendData?.[0]} />
          <MessagesContainer previousMessages={currentChatData?.messages} />
          <MessageInputBar />
        </>
      )}
    </div>
  );
}

export default ChatsContainer;
