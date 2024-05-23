import React from 'react'
import { BsSend } from "react-icons/bs";
import  useSendMessage from "../../hooks/useSendMessage"
function MessageInput() {
  const [message, setMessage] = React.useState("");
    const {loading, sendMessage} = useSendMessage();
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    if(!message) return;
    await sendMessage(message)
    setMessage("");
  }
  return (
    <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 input-warning   ' placeholder='Type a message...' value={message} onChange={e => setMessage(e.target.value)}/>
            <button className="absolute inset-y-0 end-0 flex items-center pe-3">
              {loading ? <div className = 'loading loading-spinner'></div> : <BsSend className="text-amber-500"/>}
            </button>

        </div>
    </form>
  )
}

export default MessageInput
