import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./productsSlice";
import axios from "axios";

axios.defaults.baseURL = "https://honey-badgers-ecommerce.glitch.me";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
