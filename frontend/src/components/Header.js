import { useState, useContext } from "react";

import { NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Logo from '../assets/logo.jpg'

import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { GiCartwheel } from "react-icons/gi";
import { RiLogoutBoxLine, RiLoginBoxLine } from "react-icons/ri";
const loggedInUser = () => {
  return true;
};
export  const getTotalCartQty = (cartItems) => {
  const cartItemArr = cartItems.map((carItem) => carItem.inCart);
  return cartItemArr.reduce((partialSum, a) => partialSum + a, 0);
};
const Header = () => {
  const { user } = useContext(userContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="flex   w-screen flex-col justify-center space-y-6 items-center p-4  shadow-lg md:flex-row md:px-8 md:items-center">
      <div className="  pt-8 ">
        <NavLink  to='/'>
        <img className="h-20 w-18 " src={Logo} alt="logo" />
        </NavLink>
      </div>

      <ul className=" flex flex-col  w-3/4  space-y-4   justify-center items-center   md:flex  md:flex-1 md:flex-row  md:justify-end  md:space-x-16  ">
        
        <li className="font-bold text-lg text-red-600  md:self-end active:text-gray-400">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="font-bold text-lg text-red-600  md:self-end active:text-gray-400">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="font-bold text-lg text-red-600 active:text-gray-400 ">
          <NavLink to="/">Explore</NavLink>
        </li>

        <li className="relative ">
          <NavLink to="/cart" className="   font-bold text-lg text-red-600 active:text-gray-400">
            <span className="absolute text-xs right-[-12px]  top-[-7px] bg-green-700 text-white rounded-lg px-1">
              {getTotalCartQty(cartItems)}
            </span>
            <GiCartwheel className="text-3xl" />
          </NavLink>
        </li>
        {/* <li className="font-bold text-md text-red-600 ">
        {isLoggedIn ? (
            <div className="flex space-x-1 items-center justify-center">
              <h1 className="inline   text-gray-600">
                Hello, {user.name}
              </h1>

              <button onClick={() => setIsLoggedIn(false)}>
                <RiLoginBoxLine className="text-red-600 text-md" />
              </button>
            </div>
          ) : (
            <div className="flex space-x-1 items-center">
              <h1 className="inline ">Welcome, User</h1>
              <button onClick={() => setIsLoggedIn(true)}>
                <RiLogoutBoxLine className="text-green-600 text-md" />
              </button>
            </div>
          )}
        </li> */}
      </ul>
      <div>
        <div>
       
        </div>
      </div>
    </div>
  );
};

export default Header;
