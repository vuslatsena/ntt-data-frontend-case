import React, { useState } from "react";
import Title from "./ProductsMenu";
import Cards from "./ProductItems";
import More from "./Button";

export default function Main() {
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div className="container flex flex-col gap-y-5 mx-auto px-4">
      <Title setIsFiltered={setIsFiltered} isFiltered={isFiltered} />
      <Cards isFiltered={isFiltered} />
      <More />
    </div>
  );
}
