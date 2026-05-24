import { createAsyncThunk } from "@reduxjs/toolkit";

import { mockProducts } from "./mockData";

const API_ARRIVALS_URL = import.meta.env.VITE_ARRIVALS_URL;
const API_PRODUCT_KEY = import.meta.env.VITE_PRODUCT_KEY;
const API_PRODUCT_URL = import.meta.env.VITE_PRODUCT_URL;
const USE_MOCK = true;

const fetchProducts = async () => {
  if (USE_MOCK) {
    return mockProducts;
  }

  try {
    const response = await fetch(API_PRODUCT_URL, {
      headers: {
        Authorization: API_PRODUCT_KEY,
      },
    });

    const metaData = await response.json();
    return metaData.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchNewArrivals = async () => {
  try {
    const response = await fetch(API_ARRIVALS_URL);
    const metaData = await response.json();
    return metaData.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProductsAction = createAsyncThunk("appState/fetchProducts", fetchProducts);

export const fetchNewArrivalsAction = createAsyncThunk("appState/fetchNewArrivals", fetchNewArrivals);
