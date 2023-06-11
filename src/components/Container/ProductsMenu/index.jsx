import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";

export default function ProdcutsMenu({ isFiltered, setIsFiltered }) {
  const toggleFiltered = () => {
    setIsFiltered(!isFiltered);
  };

  const products = useSelector((state) => state.products.data);

  const countFavorite = products.filter((product) => product.isFavorited)
    .length;

  return (
    <div className="h-24 flex items-center justify-between">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Products</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center mr-10">
          {countFavorite > 0 ? (
            <FavoriteIcon color="error" fontSize="medium" />
          ) : (
            <FavoriteBorderIcon fontSize="medium" />
          )}
          <p className="text-sm sm:text-lg ml-2">{countFavorite} Product</p>
        </div>
        <button
          onClick={toggleFiltered}
          className={`${
            isFiltered
              ? "bg-slate-100 border-[1px] border-blue-800 text-blue-900"
              : "bg-blue-800 text-white"
          }  text-sm sm:text-base py-1 sm:px-3 px-2 rounded`}
        >
          Favorites
        </button>
      </div>
    </div>
  );
}
