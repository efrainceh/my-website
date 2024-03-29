import { Rating } from "@mantine/core";
import * as styles from "./styles";

interface Props {
  language: string;
  rating: number;
}

export default function LanguageRating({ language, rating }: Props) {
  return (
    <div className={styles.ratingGrid}>
      <h1 className={styles.leftSide}>{language}</h1>
      <div className={styles.rightSide}>
        <div className={styles.desktop}>
          <Rating value={rating} readOnly size="lg" />
        </div>
        <div className={styles.mobile}>
          <Rating value={rating} readOnly />
        </div>
      </div>
    </div>
  );
}
