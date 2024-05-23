import React from "react";
import  useConversation  from "../../zustand/useConversation.js";
function Conversation({conversation, emoji, lastIndex}) {
  const {selectedConversation, setSelectedConversation} = useConversation();  
  const isSelected = selectedConversation?._id === conversation._id;
  // console.log(conversations);
  return (
    <>
      <div className={`flex gap-2 items-center text-gray-500 hover:text-white hover:bg-amber-500  rounded p-2 py-1 cursor-pointer 
      ${isSelected ? "bg-amber-500 text-white" : ""} `} 
      onClick = {() => setSelectedConversation(conversation)}>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className='flex gap-3 justify-between'>
                <p className='font-bold '>{conversation.fullname}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
      </div>

      {!lastIndex && <div className="divider  my-0 py-0 h-1  "></div>}
    </>
  );
}

export default Conversation;
