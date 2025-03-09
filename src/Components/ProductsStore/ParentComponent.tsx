import React from 'react';
import NavBar from './NavBar';
//import SideBar from './SideBar';
import HomePage from './HomePage';


export default function ParentComponent() {
  return (
    <div className='h-screen'>
        <NavBar/>
        <HomePage/>
    </div>
  )
}
