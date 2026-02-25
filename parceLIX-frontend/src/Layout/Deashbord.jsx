import React from 'react';
import DeashNav from '../Pages/Deashbord/DeashNav/DeashNav';
import { Outlet } from 'react-router';
import SidebarNav from '../Pages/Deashbord/Sidebar/SidebarNav';
import Footer from '../Component/Footer/Footer';

const Deashbord = () => {
    return (
        <div className='w-full min-h-screen'>
           <DeashNav></DeashNav>
           <div className='flex '>
              <div className='min-h-screen'><SidebarNav></SidebarNav></div>
              <div><Outlet></Outlet></div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Deashbord;