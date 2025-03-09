import React from 'react';
import SideBar from './SideBar';
import MainPage from './MainPage';

export default function HomePage() {
  return (
    <div className='bg-white sticky '>
      <SideBar/>
      <MainPage/>
    </div>
  )
}
