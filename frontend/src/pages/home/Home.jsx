import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'
function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-blue-100  shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
       <SideBar />
       <MessageContainer /> 
    </div>
  )
}

export default Home
