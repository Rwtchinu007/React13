import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-10 bg-mauve-800 flex justify-between px-5 items-center nav">
      <h3 className="text-violet-200 font-semibold text-2xl">Navbar</h3>
      <div className="flex gap-8 font-bold">
        <NavLink to="/" style={({isActive}) => ({
          color:isActive?'green':'white'
        })}>Home</NavLink>
        <NavLink to="/about" style={({isActive})=>({
          color:isActive?'green':'white'
        })}>About</NavLink>
        <NavLink to="/courses" style={({isActive})=>({
          color:isActive?'green':'white'
        })}>Courses</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
