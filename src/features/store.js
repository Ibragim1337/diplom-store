import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productSlice from "./products/productSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
  devTools: true,

})