import { Rating } from "@mantine/core";
import * as styles from "./styles";

interface Props {
  language: string;
  rating: number;
}

export default function LanguageRating({ language, rating }: Props) {
  return (
    <div className={styles.ratingGrid}>
      <h1 className={styles.language}>{language}</h1>
      <Rating value={rating} readOnly size="lg" />
    </div>
  );
}
