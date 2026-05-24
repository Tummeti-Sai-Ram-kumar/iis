import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { fetchNewArrivalsAction, fetchProductsAction } from "./thunks";

import type { CartItem, NewArrival, Product } from "../types";

export interface AppState {
  cartItems: CartItem[];
  cartToggle: boolean;
  newArrivals: NewArrival[];
  products: Product[];
}

const initialState: AppState = {
  cartItems: [],
  cartToggle: false,
  newArrivals: [],
  products: [],
};

export const slice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setCartToggle: (state) => {
      state.cartToggle = !state.cartToggle;
    },
    incrementQuantity: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.cartToggle = true;
    },
    decrementQuantity: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity === 0) {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAction.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    });
    builder.addCase(fetchNewArrivalsAction.fulfilled, (state, action: PayloadAction<NewArrival[]>) => {
      state.newArrivals = action.payload;
    });
  },
});

export const appStateActions = slice.actions;
