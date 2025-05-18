import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='text-center space-x-8 py-6'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/addCoffee'}>Add Coffee</NavLink>
            <NavLink to={'/signin'}>Sign In</NavLink>
            <NavLink to={'/signup'}>Sign Up</NavLink>
            <NavLink to={'/users'}>Users</NavLink>

        </div>
    );
};

export default Header;