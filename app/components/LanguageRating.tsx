import { Group, Rating, Text } from "@mantine/core";

interface Props {
  language: string;
  rating: number;
}

export default function LanguageRating({ language, rating }: Props) {
  return (
    <div className="grid grid-cols-2 place-items-start w-[300px]">
      <div>
        <Text size="xl" fw={700}>
          {language}
        </Text>
      </div>
      <div>
        <Rating value={rating} readOnly size="lg" />
      </div>
    </div>
  );
}
