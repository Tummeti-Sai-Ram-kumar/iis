import type { FC, ReactElement } from "react";
import { useEffect } from "react";

import { useAppDispatch } from "./store/hooks";
import { fetchNewArrivalsAction, fetchProductsAction } from "./store/thunks";

import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { NewArrivals } from "./components/NewArrivals/NewArrivals";
import { Products } from "./components/Products/Products";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";

export const App: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
    dispatch(fetchNewArrivalsAction());
  }, [dispatch]);

  return (
    <>
      <HeroBanner />
      <main>
        <NewArrivals />
        <Products />
      </main>
      <Cart />
      <Footer />
    </>
  );
};
