import { createSelector } from "@reduxjs/toolkit";

import { useAppSelector } from "./hooks";

import type { AppState } from "./slice";
import type { AppRootState } from "./types";

const selectCartItems = (state: AppRootState): AppState["cartItems"] => state.appState.cartItems;

const selectCartTotalPrice = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((acc, item) => acc + item.min_price * item.quantity, 0),
);

export const useAppSelectors = {
  useCartItems: (): AppState["cartItems"] => useAppSelector(selectCartItems),
  useCartToggle: (): AppState["cartToggle"] => useAppSelector((state) => state.appState.cartToggle),
  useCartTotalPrice: (): number => useAppSelector(selectCartTotalPrice),
  useItemQuantity: (id: string): number =>
    useAppSelector((state) => state.appState.cartItems.find((item) => item.id === id)?.quantity ?? 0),
  useProducts: (): AppState["products"] => useAppSelector((state) => state.appState.products),
  useNewArrivals: (): AppState["newArrivals"] => useAppSelector((state) => state.appState.newArrivals),
};
