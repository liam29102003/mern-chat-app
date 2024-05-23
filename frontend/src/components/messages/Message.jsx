import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import  useConversation from '../../zustand/useConversation'
import {extractTime} from '../../utils/extractTime'
function Message({message}) {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const formattedTIme = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const chatClass = `chat ${fromMe? "chat-end" : "chat-start"}`;
  const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe? "bg-amber-500" : "bg-gray-200";
  const bubbleTextColor = fromMe? "text-white" : "text-gray-800";
  return (
    <div className={`${chatClass}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            
            </div>
        </div>
        <div className={` chat-bubble ${bubbleBgColor} ${bubbleTextColor} `}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTIme}</div>
    </div>
  )
}

export default Message
