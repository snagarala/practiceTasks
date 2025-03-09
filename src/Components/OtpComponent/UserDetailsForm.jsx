import React from 'react';

export default function UserDetailsForm({details}) {

  return (
    <div className='w-[550px] h-[550px] bg-gradient-to-r from-cyan-200 to-blue-300 
       flex rounded  '>
         
       <div className='flex flex-col gap-4  mt-[100px] ml-[120px] '>
       <h1 className='text-3xl font-bold mb-[40px] pl-[60px]'>User Details</h1>
       <p className='pl-[80px]'><strong>Name: </strong>  
          <span className='text-slate-600 text-2xl '>{details.userName}</span></p>
       <p className='pl-[80px]'><strong>Email: </strong> 
          <span className='text-slate-600 text-2xl '>{details.userEmail}</span></p>
       <p className='pl-[80px]'><strong>Phone: </strong>  
          <span className='text-slate-600 text-2xl '>{details.userPhoneNumber}</span></p>
       </div>
    </div>
  )
}
