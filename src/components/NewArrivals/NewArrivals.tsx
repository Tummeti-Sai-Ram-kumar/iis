import type { CSSProperties, FC, ReactElement } from "react";
import { useCallback, useState } from "react";

import { useAppSelectors } from "../../store/selectors";

import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";

import styles from "./NewArrivals.module.css";

export const NewArrivals: FC = (): ReactElement => {
  const newArrivals = useAppSelectors.useNewArrivals();

  const [currentIndex, setCurrentIndex] = useState(0);

  const newArrivalsCount = newArrivals.length;
  const translateValue = newArrivalsCount > 0 ? -(currentIndex * 100) / newArrivalsCount : 0;

  const handlePrevious = useCallback(() => {
    if (newArrivalsCount === 0) return;

    setCurrentIndex((i) => (i - 1 + newArrivalsCount) % newArrivalsCount);
  }, [newArrivalsCount]);

  const handleNext = useCallback(() => {
    if (newArrivalsCount === 0) return;

    setCurrentIndex((i) => (i + 1) % newArrivalsCount);
  }, [newArrivalsCount]);

  return (
    <div className={styles.newArrivals}>
      <p className={styles.newArrivals__title}>New Arrivals</p>
      <div
        className={styles.newArrivals__items}
        style={{ width: `${newArrivalsCount * 100}%`, "--translate": `${translateValue}%` } as CSSProperties}
      >
        {newArrivals.map((item) => {
          return (
            <div key={item.id} className={styles.newArrivals__slide}>
              <img src={item.images[0]} alt={item.title} className={styles.newArrivals__slideImage} />
            </div>
          );
        })}
      </div>
      <div className={styles.newArrivals__caption}>
        <p className={styles.newArrivals__captionTitle}>{newArrivals[currentIndex]?.title}</p>
        <p className={styles.newArrivals__captionPrice}>USD {newArrivals[currentIndex]?.price}</p>
      </div>
      <button type="button" className={styles.newArrivals__prev} onClick={handlePrevious}>
        <ChevronLeftIcon />
      </button>
      <button type="button" className={styles.newArrivals__next} onClick={handleNext}>
        <ChevronRightIcon />
      </button>
    </div>
  );
};
