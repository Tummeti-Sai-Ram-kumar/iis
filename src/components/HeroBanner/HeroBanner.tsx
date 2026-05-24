import type { FC, ReactElement } from "react";

import styles from "./HeroBanner.module.css";

export const HeroBanner: FC = (): ReactElement => <section className={styles.heroBanner} aria-label="Hero Banner" />;
