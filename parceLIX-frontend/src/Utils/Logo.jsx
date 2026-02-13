import React from 'react';
import logo from '../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-center justify-center gap-1.5'>
            <img src={logo} alt="parcelx-logo" className='w-10'/>
            <h1 className='text-3xl font-extrabold text-color'>parceLIX</h1>
        </div>
    );
};

export default Logo;