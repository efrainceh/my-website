"use client";
import React from "react";
import { Image, Card, Text } from "@mantine/core";
import LanguageCircle from "@/app/components/language/LanguageCircle";
import * as styles from "./styles";

interface Props {
  project: any;
  carousel: boolean;
}

export default function ProjectBox({ project, carousel }: Props) {
  const image = String(project.image) && (
    <Image src={project.image} w="auto" fit="contain" alt="image of project" />
  );
  return (
    <a href={project.github} target="_blank">
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={carousel ? styles.carouselCard : styles.card}
      >
        <Text
          size="xl"
          fw={700}
          ta="center"
          variant="gradient"
          gradient={{ from: "rgba(87, 29, 222, 1)", to: "blue", deg: 52 }}
        >
          {project.title}
        </Text>
        {image}
        <div className={styles.text}>
          <p>{project.content}</p>
          <LanguageCircle language={project.language} />
        </div>
        <Card.Section>
          <Image src="images/A_black_image.jpeg" h={50} alt="black image" />
        </Card.Section>
      </Card>
    </a>
  );
}
