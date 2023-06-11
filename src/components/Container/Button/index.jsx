import React from "react";
import Arrow from "../../../assets/rightArrow.svg";

export default function More({ onClick }) {
  return (
    <div className="w-full h-36 flex justify-center items-center">
      <button className="h-10 flex flex-row justify-center items-center bg-blue-800 text-white px-8 rounded" onClick={onClick}>
        More
        <img className="h-5 ml-5 flex items-center" src={Arrow} alt="arrow" />
      </button>
    </div>
  );
}
