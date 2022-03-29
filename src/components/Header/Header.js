import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-4xl'>Save Most of Your Money</h2>
            <p className='text-2xl'>By giving me More Money</p>
        </div>
    );
};

export default Header;