import React from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'
function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-w-96 mx-auto">
        <div className="w-full p-6 bg-blue-100 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40  
">
            <h1 className ="text-3xl font-semibold text-center text-white">SignUp  
                <span className='text-amber-500'> ChatApp</span>
            </h1>
            <form action="">
            <div>
                    <label className='mt-1 mb-0 label p-2'>
                        <span className="text-base label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter fullname" className="input input-bordered w-full h-10"/>
                </div>
                <div>
                    <label className='mt-1 mb-0 label p-2'>
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="input input-bordered w-full h-10"/>
                </div>
                <div>
                    <label className='mt-1 mb-0 label p-2'>
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10"/>
                </div>
                <div>
                    <label className='mt-1 mb-0 label p-2'>
                        <span className="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Enter password again" className="input input-bordered w-full h-10"/>
                </div>
                <GenderCheckBox />
                <a href="#" className="mx-1  text-sm hover:underline hover:text-amber-500 mt-2 inline-block">Already have an account?</a>

                <div>
                    <button className="btn btn-sm bg-amber-500 border-0 text-white mt-2 w-full">SignUp</button>
                </div>
            </form>

            
        </div>
      
    </div>
  )
}

export default Signup

// function Signup() {
//     return (
//       <div className="flex flex-col items-center justify-center h-full min-w-96 mx-auto">
//           <div className="w-full p-6 bg-blue-100 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40  
//   ">
//               <h1 className ="text-3xl font-semibold text-center text-white">SignUp  
//                   <span className='text-amber-500'> ChatApp</span>
//               </h1>
//               <form action="">
//               <div>
//                       <label className='mt-1 mb-0 label p-2'>
//                           <span className="text-base label-text">Full Name</span>
//                       </label>
//                       <input type="text" placeholder="Enter fullname" className="input input-bordered w-full h-10"/>
//                   </div>
//                   <div>
//                       <label className='mt-1 mb-0 label p-2'>
//                           <span className="text-base label-text">Username</span>
//                       </label>
//                       <input type="text" placeholder="Enter username" className="input input-bordered w-full h-10"/>
//                   </div>
//                   <div>
//                       <label className='mt-1 mb-0 label p-2'>
//                           <span className="text-base label-text">Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10"/>
//                   </div>
//                   <div>
//                       <label className='mt-1 mb-0 label p-2'>
//                           <span className="text-base label-text">Confirm Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter password again" className="input input-bordered w-full h-10"/>
//                   </div>
//                   <GenderCheckBox />
//                   <a href="#" className="mx-1  text-sm hover:underline hover:text-amber-500 mt-2 inline-block">Already have an account?</a>
  
//                   <div>
//                       <button className="btn btn-sm bg-amber-500 border-0 text-white mt-2 w-full">SignUp</button>
//                   </div>
//               </form>
  
              
//           </div>
        
//       </div>
//     )
//   }
  
//   export default Signup
  
