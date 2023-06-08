import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(
    "https://honey-badgers-ecommerce.glitch.me/products"
  );
  const data = await response.json();
  return data;
});

const initialState = {
  data: [],
  loading: true,
  error: "",
};

export const productsSlice = createSlice({
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
        state.error = "";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.map((product) => ({
          ...product,
          isFavorited: false,
        }));
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching products";
      });
  },
});

export const { addFavorite, filterFavorites } = productsSlice.actions;

export default productsSlice.reducer;
