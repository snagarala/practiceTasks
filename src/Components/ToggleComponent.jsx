import React, {useState} from 'react';

export default function ToggleComponent() {

const [isClicked,setIsClicked] = useState(false);

  return (
    <div className='h-200px w-400px bg-amber-100 border p-1 m-5 flex items-center justify-center gap-5'>
       <button onClick={()=>setIsClicked(!isClicked)} 
         className='p-1 border bg-blue-200 rounded px-2 cursor-pointer '>
        {isClicked ? "Button" : "i am clicked"}</button>
       <p className='p-1 text-green-600'>{isClicked ? "Hello" : "Hi"}</p>
    </div>
  )
}
