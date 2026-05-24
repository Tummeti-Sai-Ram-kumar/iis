import type { FC, ReactElement } from "react";
import { memo } from "react";

import { Stepper } from "../Stepper/Stepper";

import type { CartItem } from "../../types";

import styles from "./Cart.module.css";

interface CartListItemProps {
  item: CartItem;
}

const CartListItemInner: FC<CartListItemProps> = ({ item }): ReactElement => (
  <div className={styles.cart__item}>
    <p className={styles.cart__itemTitle}>{item.title}</p>
    <p className={styles.cart__itemPrice}>USD {item.min_price}</p>
    <img src={item.image} alt={item.title} className={styles.cart__itemImage} />
    <Stepper item={item} />
  </div>
);

export const CartListItem = memo(CartListItemInner);