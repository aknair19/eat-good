import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import store from "../utils/store";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { getTotalCartQty } from "./Header";
import { EMPTY_CART_IMAGE } from "../utils/constant";
import Modal from "./Modal";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  
  const cartItems = useSelector((store) => store.cart.items);

  const getTotalAmount = (cartItems) => {
    const itemSum = cartItems.map(
      (cartItem) => cartItem.price * cartItem.inCart
    );
    return itemSum.reduce((partialSum, a) => partialSum + a, 0);
  };
  const totalSum = getTotalAmount(cartItems);
  const TAX = totalSum * 0.18;
  const DELIVERY_CHARGES = 2000;
  const totalSumAfterTax = totalSum + TAX + DELIVERY_CHARGES;
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const placeOrder=()=>{
    dispatch(clearCart())
    setOpenModal(true)
  }
  return cartItems.length === 0 ? (
    <div className="h-screen w-screen flex flex-col justify-start mt-6 items-center  space-y-3 p-2">
      <div>
        <img src={EMPTY_CART_IMAGE} alt="img" width="300" height="300" />
      </div>
      <div>
        <h1 className="text-lg text-red-600 text-center font-semibold">
          Your cart is empty
        </h1>
        <p className="text-gray-400 text-md">
          You can go to home page to view more restaurants
        </p>
      </div>
      <Link to="/">
        <button className="text-white font-bold bg-red-600 p-2 px-2 mt-2">
          Explore  Restaurants
        </button>
      </Link>
    </div>
  ) : (
    <div className="p-3  w-full md:w-3/4 mx-auto my-4 h-screen">
      <h1 className="text-center text-xl font-medium">
        Items in Cart[{getTotalCartQty(cartItems)}]
      </h1>
      {cartItems.map((item) => (
        <div className="flex items-center p-4 border-b-2">
          <div className="flex flex-col   items-start justify-start w-3/4  p-6">
            <h4 className="text-meduim font-semibold">
              {item.name}{" "}
              <span className="text-xl text-red-600 font-bold mx-1">
                [{item.inCart}]
              </span>
            </h4>
            <h4 className="text-sm font-semibold">
              ₹{item.price ? item.price / 100 : 99}
            </h4>
            <p className="text-sm font-light text-gray-400 mt-1">
              {item.description}
            </p>
          </div>
          <div className="w-1/4 flex justify-end  ">
            <img
              src={IMG_URL + item.imageId}
              alt={item.name}
              className="border-2 text-xs font-thin bg-gray-300 w-40 h-32 rounded-lg"
            />
          </div>
        </div>
      ))}

      <div className="  w-full md:w-1/2 mx-auto">
        <h2 className="text-center font-bold text-lg p-3 ">Price Breakup</h2>
        <div className="m-1 p-5  border-2 border-dashed border-red-600 ">
          <p className="text-sm font-semibold">Item Total ₹{totalSum / 100}</p>
          <p className="text-sm font-semibold">Taxes ₹{TAX / 100}</p>
          <p className="text-sm font-semibold">
            Delivery ₹{DELIVERY_CHARGES / 100}
          </p>
          <p className="text-md font-extrabold mt-2  border-dashed py-1 ">
            Total Amount ₹{totalSumAfterTax / 100}
          </p>
          <div className="flex space-x-2 items-center">
          <Link to="/confirmation">
            <button
              onClick={() => placeOrder()}
              className="  p-1 px-2 my-3 bg-red-600 font-bold text-md text-white  pointer rounded-xl"
            >
              Place Order
            </button>
          </Link>
          <button
            className="p-1 px-2 m-8 bg-red-600 font-bold text-md text-white  pointer rounded-xl"
            onClick={() => clearCartHandler()}
          >
            Clear Cart
          </button>
          </div>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
    
  );
};

export default Cart;
