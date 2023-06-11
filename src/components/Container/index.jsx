import React, { useState } from "react";
import ProductsMenu from "./ProductsMenu";
import ProductCard from "./ProductItems";
import MoreButton from "./Button";

export default function Main() {
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className="container flex flex-col gap-y-5 mx-auto px-4">
      <ProductsMenu setIsFiltered={setIsFiltered} isFiltered={isFiltered} />
      <ProductCard isFiltered={isFiltered} />
      <MoreButton />
    </div>
  );
}
