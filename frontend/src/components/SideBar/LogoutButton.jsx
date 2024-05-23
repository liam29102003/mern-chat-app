import React from 'react'
import { BiLogOut } from "react-icons/bi";
import  useLogout from '../../hooks/useLogout.js';
function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>
      {
        !loading ? (
          <BiLogOut className=' w-6 h-6 text-gray-600 cursor-pointer' onClick={logout} />
        ) : (
          <div className='w-6 h-6 animate-spin mx-auto'></div>
        )
      }
    </div>
  )
}

export default LogoutButton
