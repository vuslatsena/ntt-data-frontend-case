import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "https://honey-badgers-ecommerce.glitch.me/products"
      );
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
  pending: false,
  error: "",
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
        state.pending = true;
        state.error = "";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.loading = false;
        state.data = action.payload.map((product) => ({
          ...product,
          isFavorited: false,
        }));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.pending = false;
        state.loading = false;
        state.error = `Error fetching products: ${action.error.message}`;
      });
  },
});

export const { addFavorite, filterFavorites } = productsSlice.actions;

export default productsSlice.reducer;
