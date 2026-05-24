import type { FC, ReactElement } from "react";
import { useState, useMemo } from "react";

import { useAppSelectors } from "../../store/selectors";

import { Stepper } from "../Stepper/Stepper";

import styles from "./Products.module.css";

export const Products: FC = (): ReactElement => {
  const products = useAppSelectors.useProducts();

  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = useMemo(
    () => products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase())),
    [products, searchValue],
  );

  return (
    <div className={styles.products}>
      <div className={styles.products__searchContainer}>
        <label htmlFor="search" className={styles.products__searchLabel}>What are you looking for ?</label>
        <input
          id="search"
          className={styles.products__searchInput}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          type="search"
        />
      </div>
      <div className={styles.products__list}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return (
              <div key={product.id} className={styles.products__item}>
                <img src={product.image} alt={product.title} className={styles.products__itemImage} />
                <p className={styles.products__itemTitle}>{product.title}</p>
                <div className={styles.products__itemPriceContainer}>
                  <p className={styles.products__itemPrice}>
                    USD {product.min_price} - {product.max_price}
                  </p>
                  <Stepper item={product} />
                </div>
              </div>
            );
          })
        ) : (
          <p className={styles.products__noResults}>No results found..</p>
        )}
      </div>
    </div>
  );
};
