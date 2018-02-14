import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to="/"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/quizzes"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Quizzes</NavLink>
      <NavLink
        to="/about"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >About</NavLink>
    </div>
  );
};

export default Navbar;
