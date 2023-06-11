import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(`Error fetching products: ${error.response.status}`);
      } else if (error.request) {
        throw new Error("No response received from the server");
      } else {
        throw new Error("Error occurred while making the request");
      }
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const { id } = action.payload;
      const product = state.data.find((product) => product.id === id);
      if (product) {
        product.isFavorited = !product.isFavorited;
      }
    },
    filterFavorites: (state) => {
      state.data = state.data.filter((product) => product.isFavorited);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.map((product) => ({
          ...product,
          isFavorited: false,
        }));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, filterFavorites } = productsSlice.actions;

export default productsSlice.reducer;
