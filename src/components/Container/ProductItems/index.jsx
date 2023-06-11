import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productsSlice";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AutoPlaySwipeableViews from "react-swipeable-views";

export default function ProductCard({ isFiltered }) {
  let products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  if (isFiltered === true) {
    products = products.filter((product) => product.isFavorited);
  }

  const swipeableViewContent = products.slice(0, 4).map((product) => (
    <React.Fragment key={product.id}>
      <Card {...product} />
    </React.Fragment>
  ));

  if (products.length === 0) {
    return <div>No favorite</div>;
  }

  const handleDotClick = (index) => {
    setActiveStep(index);
  };

  const renderDots = () => {
    return swipeableViewContent.map((_, index) => (
      <span
        key={index}
        onClick={() => handleDotClick(index)}
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: activeStep === index ? "#0059BC" : "gray",
          display: "inline-block",
          margin: "0 5px",
          cursor: "pointer",
        }}
      />
    ));
  };

  return (
    <>
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
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {swipeableViewContent}
        </AutoPlaySwipeableViews>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          {renderDots()}
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: "16px",
        }}
      >
        {isLoading ? "Loading..." : swipeableViewContent}
      </Box>
    </>
  );
}
