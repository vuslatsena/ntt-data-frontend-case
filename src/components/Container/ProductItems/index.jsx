import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import AutoPlaySwipeableViews from "react-swipeable-views";
import Card from "./Card";
import MoreButton from "./../Button";

export default function ProductCard({ isFiltered }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [displayLimit, setDisplayLimit] = useState(4);
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);

  useEffect(() => {
    // Fetch products when the page changes
    dispatch(fetchProducts(page));
  }, [dispatch, page]);

  const theme = useTheme();
  const [activePage, setActivePage] = useState(0); // State to keep track of the active page

  const handleStepChange = (step) => {
    // Update the active page when the swipeable view changes
    setActivePage(step);
  };

  // Filter the displayed products based on the isFiltered prop
  let displayedProducts = products;

  if (isFiltered) {
    displayedProducts = products.filter((product) => product.isFavorited);
  }

  if (!isFiltered) {
    displayedProducts = [...products];
  }

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const groupSize = isLargeScreen ? 4 : 1;

  // Split the displayed products into groups based on groupSize
  // and create a swipeable view content with Card components
  // rendered in each group along with spacing between groups
  const swipeableViewContent = displayedProducts
    .slice(0, displayLimit)
    .reduce((acc, product, index) => {
      if (index % groupSize === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(product);
      return acc;
    }, [])
    .map((group, groupIndex) => (
      <React.Fragment key={groupIndex}>
        <Box sx={{ display: "flex", gap: "16px" }}>
          {group.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </Box>
        <Box sx={{ height: "16px" }} /> {/* Add spacing between groups */}
      </React.Fragment>
    ));

  if (displayedProducts.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "red" }}>
        No favorites found.
      </div>
    );
  }

  const handleDotClick = (index) => {
    setActivePage(index);
  };

  const handleLoadMore = () => {
    // Increase the display limit and reset the active page
    setDisplayLimit(displayLimit + groupSize);
    setActivePage(0);
  };

  const renderDots = () => {
    // Render dots for each page of swipeable view
    return swipeableViewContent.map((_, index) => (
      <span
        key={index}
        onClick={() => handleDotClick(index)}
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: activePage === index ? "#0059BC" : "gray",
          display: "inline-block",
          margin: "0 5px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      />
    ));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            maxWidth: 340,
            flexGrow: 1,
            display: { xs: "block", sm: "none" },
            marginX: "auto",
          }}
        >
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activePage}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {swipeableViewContent}
          </AutoPlaySwipeableViews>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
            {renderDots()}
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column", gap: "16px" }}>
          {isLoading ? "Loading..." : swipeableViewContent}
        </Box>
        {!isLoading && displayedProducts.length > displayLimit && (
          <MoreButton onClick={handleLoadMore} style={{ marginTop: "16px" }}>
            Load More
          </MoreButton>
        )}
      </Box>
    </>
  );
}
