import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./productsSlice";
import axios from "axios";
import { BASE_URL } from "./constants";

axios.defaults.baseURL = BASE_URL;

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
