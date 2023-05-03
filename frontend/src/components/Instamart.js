import React, { useState, useContext } from "react";
import userContext from "../utils/userContext";
const Section = ({ title ,isVisible,setIsVisible}) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-black-200 p-2 m-3">
      <h1 className="font-bold text-lg">{title} </h1>
      {isVisible ? (
        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            voluptatum a deleniti iusto architecto quae cum temporibus, eos
            quos? Quos.
          </p>

          <button
            onClick={(prevState) => setIsVisible(!prevState)}
            className="p-1 m-2 bg-black text-white rounded-xl"
          >
            Hide
          </button>
        </div>
      ) : (
        <button
          onClick={(prevState) => setIsVisible(prevState)}
          className="p-1 m-2 bg-black text-white rounded-xl"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [activeIndex, setActiveIndex] = useState(false);
  return (
    <div>
      <Section
        title="What's New"
        isVisible={activeIndex}
        setIsVisible={setActiveIndex}
      />
      <Section
        title="Career with us"
        isVisible={activeIndex}
        setIsVisible={setActiveIndex}
      />
    </div>
  );
};

export default Instamart;
