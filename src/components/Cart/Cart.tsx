import type { FC, ReactElement } from "react";
import { useCallback } from "react";

import { useAppDispatch } from "../../store/hooks";
import { useAppSelectors } from "../../store/selectors";
import { appStateActions } from "../../store/slice";

import { CartListItem } from "./CartListItem";
import { CloseIcon } from "./CloseIcon";

import styles from "./Cart.module.css";

export const Cart: FC = (): ReactElement | null => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelectors.useCartItems();
  const cartToggle = useAppSelectors.useCartToggle();
  const totalPrice = useAppSelectors.useCartTotalPrice();

  const handleCartToggle = useCallback(() => {
    dispatch(appStateActions.setCartToggle());
  }, [dispatch]);

  if (!cartToggle) {
    return null;
  }

  return (
    <div className={styles.cart}>
      <p className={styles.cart__title}>Cart</p>
      {cartItems.length > 0 ? (
        <div className={styles.cart__itemsContainer}>
          <div className={styles.cart__items}>
            {cartItems.map((item) => <CartListItem key={item.id} item={item} />)}
          </div>
          <div className={styles.cart__checkout}>
            <div className={styles.cart__totalContainer}>
              <p className={styles.cart__totalTitle}>Total</p>
              <p className={styles.cart__totalPrice}>USD {totalPrice}</p>
            </div>
            <button className={styles.cart__button}>Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p className={styles.cart__empty}>Your Cart is empty</p>
      )}
      <button type="button" className={styles.cart__close} onClick={handleCartToggle}>
        <CloseIcon />
      </button>
    </div>
  );
};
