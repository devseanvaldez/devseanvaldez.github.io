import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="py-5 shadow-xl border-b flex bg-white z-10 sticky top-0 px-4 sm:px-0">
      <div className="container flex items-center justify-between w-full">
        <p className="font-bold">Logo</p>
        <div className="flex items-center gap-x-4 font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
