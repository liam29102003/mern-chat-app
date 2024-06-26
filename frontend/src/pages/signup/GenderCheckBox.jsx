import React from 'react'

function GenderCheckBox({onChange,gender}) {
  return (
    <div className="flex flex-row mt-2">
        <div className="form-control">
            <label htmlFor="" className= {` label gap-2 cursor-pointer ${gender === "male"? "checked:bg-amber-500" : ""} `}>
                <span className="label-text">Male</span>
                <input type="radio" name="radio-1" className="radio checked:bg-amber-500" checked={gender === "male"} onChange={() => onChange('male')} />
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className={` label gap-2 cursor-pointer ${gender === "female"? "checked:bg-amber-500" : ""} `}>
                <span className="label-text">Female</span>
                <input type="radio" name="radio-1" className="radio checked:bg-amber-500" checked={gender === "female"} onChange={() => onChange('female')} />
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className={` label gap-2 cursor-pointer ${gender === "other"? "checked:bg-amber-500" : ""} `}>
                <span className="label-text">Other</span>
                <input type="radio" name="radio-1" className="radio checked:bg-amber-500" checked={gender === "other"} onChange={() => onChange('other')} />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox


// function GenderCheckBox() {
//     return (
//       <div className="flex flex-row mt-2">
//           <div className="form-control">
//               <label htmlFor="" className="label gap-2 cursor-pointer">
//                   <span className="label-text">Male</span>
//                   <input type="radio" name="radio-1" className="radio checked:bg-amber-500"  />
//               </label>
//           </div>
//           <div className="form-control">
//               <label htmlFor="" className="label gap-2 cursor-pointer">
//                   <span className="label-text">Female</span>
//                   <input type="radio" name="radio-1" className="radio checked:bg-amber-500"  />
//               </label>
//           </div>
//           <div className="form-control">
//               <label htmlFor="" className="label gap-2 cursor-pointer">
//                   <span className="label-text">Other</span>
//                   <input type="radio" name="radio-1" className="radio checked:bg-amber-500"  />
//               </label>
//           </div>
//       </div>
//     )
//   }
  
//   export default GenderCheckBox
  
