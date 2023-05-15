import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:font-semibold">
              <Link to="shop">Shop</Link>
            </li>
            <li className="hover:font-semibold">
              <Link to="products">Products</Link>
            </li>
            <li className="hover:font-semibold">
              <Link to="login">LogIn</Link>
            </li>
            <li className="hover:font-semibold">
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="text-xl px-2 hover:text-warning hover:underline"
        >
          Onuragi
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:font-semibold">
            <Link to="shop">Shop</Link>
          </li>
          <li className="hover:font-semibold">
            <Link to="products">Products</Link>
          </li>
          <li className="hover:font-semibold">
            <Link to="login">LogIn</Link>
          </li>
          <li className="hover:font-semibold">
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="handicraft" className="btn btn-outline btn-sm btn-warning">
          Handicraft
        </Link>
      </div>
    </div>
  );
};

export default Header;
