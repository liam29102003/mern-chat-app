import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-w-96 mx-auto">
        <div className="w-full p-6 bg-blue-100 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40  
">
            <h1 className ="text-3xl font-semibold text-center text-white">Login  
                <span className='text-amber-500'> ChatApp</span>
            </h1>
            <form action="">
                <div>
                    <label className='label p-2'>
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter username" className="input input-bordered w-full h-10"/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10"/>
                </div>
                <a href="#" className="mx-1  text-sm hover:underline hover:text-amber-500 mt-2 inline-block">{"Don't"} have an account?</a>

                <div>
                    <button className="btn btn-sm bg-amber-500 border-0 text-white mt-2 w-full">Login</button>
                </div>
            </form>

            
        </div>
      
    </div>
  )
}

export default Login

// function Login() {
//     return (
//       <div className="flex flex-col items-center justify-center h-full min-w-96 mx-auto">
//           <div className="w-full p-6 bg-blue-100 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40  
//   ">
//               <h1 className ="text-3xl font-semibold text-center text-white">Login  
//                   <span className='text-amber-500'> ChatApp</span>
//               </h1>
//               <form action="">
//                   <div>
//                       <label className='label p-2'>
//                           <span className="text-base label-text">Username</span>
//                       </label>
//                       <input type="text" placeholder="Enter username" className="input input-bordered w-full h-10"/>
//                   </div>
//                   <div>
//                       <label className='label p-2'>
//                           <span className="text-base label-text">Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter password" className="input input-bordered w-full h-10"/>
//                   </div>
//                   <a href="#" className="mx-1  text-sm hover:underline hover:text-amber-500 mt-2 inline-block">{"Don't"} have an account?</a>
  
//                   <div>
//                       <button className="btn btn-sm bg-amber-500 border-0 text-white mt-2 w-full">Login</button>
//                   </div>
//               </form>
  
              
//           </div>
        
//       </div>
//     )
//   }
  