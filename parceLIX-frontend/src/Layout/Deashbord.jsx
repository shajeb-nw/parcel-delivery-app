import React from 'react';
import DeashNav from '../Pages/Deashbord/DeashNav/DeashNav';
import { Outlet } from 'react-router';
import SidebarNav from '../Pages/Deashbord/Sidebar/SidebarNav';
import Footer from '../Component/Footer/Footer';

const Deashbord = () => {
    return (
        <div className='w-full min-h-screen'>
           <DeashNav></DeashNav>
           <div className='flex min-h-screen'>
              <div className='min-h-screen'><SidebarNav></SidebarNav></div>
              <div className='mx-auto py-5'><Outlet></Outlet></div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Deashbord;