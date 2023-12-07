import { Group, Rating, Text } from "@mantine/core";

interface Props {
  language: string;
  rating: number;
}

export default function LanguageRating({ language, rating }: Props) {
  return (
    <Group justify="space-between">
      <Text size="xl" fw={700}>
        {language}
      </Text>
      <Rating value={rating} readOnly size="lg" />
    </Group>
  );
}
