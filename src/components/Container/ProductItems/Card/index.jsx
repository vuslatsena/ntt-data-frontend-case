import React, { useState } from "react";
import { addFavorite } from "../../../../redux/productsSlice";
import { useDispatch } from "react-redux";
import heartIcon from "../../../../assets/gray-heart.svg";

//Product card component
export default function Card({
  id,
  name,
  description,
  imageUrl,
  price,
  shippingMethod,
  isFavorited,
}) {
  const dispatch = useDispatch();
  const [isHeartFilled, setIsHeartFilled] = useState(isFavorited);
  const [isHeartScaling, setIsHeartScaling] = useState(false);

  const toggleFavorite = (id) => {
    setIsHeartFilled(!isHeartFilled);
    setIsHeartScaling(true);
    dispatch(addFavorite({ id }));
    setTimeout(() => {
      setIsHeartScaling(false);
    }, 500);
  };

  const formattedPrice = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <div className="w-full sm:w-32 md:w-1/2 lg:w-1/4 border-[1px] border-blue-800 rounded relative">
      <button
        onClick={() => toggleFavorite(id)}
        className={` absolute flex justify-center items-center rounded-full w-8 h-8 right-1 top-1 ${
          isHeartFilled ? "bg-red-500" : "bg-slate-100"
        }`}
      >
        <img
          src={heartIcon}
          alt="fav"
          className={`${isHeartScaling ? "scale-125" : ""}`}
        />
      </button>
      <img className="rounded-t-sm" src={imageUrl} alt="" />

      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col p-6 gap-y-1">
          <h5 className="mb-2 text-lg sm:text-xl font-medium leading-tight">
            {name}
          </h5>
          <p className="bg-blue-200" style={{ backgroundColor: "#E6EEF8" }}>
            {formattedPrice}
          </p>
          <p className="mb-4 text-sm leading-tight line-clamp-2">
            {description}
          </p>
          <p className="text-xs">{shippingMethod}</p>
        </div>
      </a>
    </div>
  );
}