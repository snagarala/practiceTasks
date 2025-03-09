import React from 'react'

export default function NavBar() {
  return (
    <nav className='sticky top-0 z-50 bg-yellow-200 h-[80px] w-full'>
     <div className='wrapper flex py-4 w-[85%] md:w-[90%] mx-auto items-center'>
       <div className='left flex mr-[180px]'>
           <img src="product.png" width={50}
              height={50} alt="productImage"/>
           <p className='font-bold text-3xl mt-[10px]'>Filters</p>
       </div>
       <div className='right flex'> 
            <img src="result.png" width={30}
              height={30} alt="resultImage"/>
            <p className='font-bold text-3xl ml-2'>Results</p>
       </div>
     </div>
    </nav>
  )
}
