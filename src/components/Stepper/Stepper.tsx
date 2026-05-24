import type { FC, ReactElement } from "react";
import { useCallback } from "react";

import { useAppSelectors } from "../../store/selectors";
import { appStateActions } from "../../store/slice";
import { useAppDispatch } from "../../store/hooks";

import type { Product } from "../../types";

import { MinusIcon } from "./MinusIcon";
import { CartIcon } from "./CartIcon";
import { PlusIcon } from "./PlusIcon";

import styles from "./Stepper.module.css";

interface StepperProps {
  item: Product;
}

export const Stepper: FC<StepperProps> = ({ item }): ReactElement => {
  const dispatch = useAppDispatch();

  const itemQuantity = useAppSelectors.useItemQuantity(item.id);

  const incrementQuantity = useCallback(() => {
    dispatch(appStateActions.incrementQuantity(item));
  }, [dispatch, item]);

  const decrementQuantity = useCallback(() => {
    dispatch(appStateActions.decrementQuantity(item));
  }, [dispatch, item]);

  return (
    <div className={styles.stepper}>
      <button
        aria-label="Decrement quantity"
        type="button"
        className={styles.stepper__button}
        onClick={decrementQuantity}
        disabled={itemQuantity <= 0}
      >
        <MinusIcon />
      </button>
      <span aria-live="polite" className={styles.stepper__count}>
        {itemQuantity > 0 ? itemQuantity : <CartIcon />}
      </span>
      <button
        aria-label="Increment quantity"
        type="button"
        className={styles.stepper__button}
        onClick={incrementQuantity}
      >
        <PlusIcon />
      </button>
    </div>
  );
};
