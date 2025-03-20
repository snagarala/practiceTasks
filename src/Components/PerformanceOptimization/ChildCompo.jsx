import React, {memo} from 'react';

const ChildCompo = ({names, updatedNames})=> {
  return (
    <div className='p-5 flex '>
    <ul className='p-5  '>
      {
        names.map((name,index)=>{
           return <li key={index} className='text-black '>{name}</li>
        })
      }
      <button onClick={updatedNames}
      className='absolute bottom-10 left-10 p-1 cursor-pointer rounded bg-blue-400 text-white mt-[50px]'>
        AddNewName</button>
    </ul>
    </div>
  )
}
export default memo(ChildCompo);