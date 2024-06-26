import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import {useAuthContext} from '../../context/AuthContext'
const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  React.useEffect(()=> {
    return () => {
      //cleanup function(unmounts)
      setSelectedConversation(null)
    }
  },[])
  return (
    <div className="md:min-w-[450px] flex flex-col">
        {!selectedConversation ? ( <NoChatSelected /> ) : (
          <>
          <div className="bg-amber-500 px-4 py-2 mb-2">
            <span className="label-text text-white">To: </span>
            <span className="text-white font-bold">{selectedConversation.fullname}</span>
          </div>
          <Messages />
          <MessageInput />
          </>
        )}
      
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () =>  {
  const {authUser} = useAuthContext();
    return (
        <div className="flex justify-center items-center h-full w-full">
        <div className="px-4 text-center sm:text-lg mide:text-xl text-gray-700 fonst-semibold flex flex-col items-center gap-2">
            <p>Welcome 👋 <span className="text-amber-500 font-bold">{authUser.fullname} </span></p>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-3xl md:text-6xl text-center text-amber-500"/>
        </div>
      </div>
    )
}
