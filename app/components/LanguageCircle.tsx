import { FaCircle } from "react-icons/fa";
import { Group, Text } from "@mantine/core";

interface Props {
  language: string;
}

export default function LanguageRating({ language }: Props) {
  var color = "black";
  switch (language) {
    case "C++":
      color = "rgb(246, 38, 129)";
      break;
    case "Python":
      color = "rgb(0, 150, 255)";
      break;
    case "Java":
      color = "rgb(153, 101, 21)";
      break;
    case "TypeScript":
      color = "blue";
      break;
    default:
      color = "black";
  }
  return (
    <Group>
      <FaCircle color={color} />
      <Text size="sm" fw={700}>
        {language}
      </Text>
    </Group>
  );
}
