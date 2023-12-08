"use client";

import React from "react";
// import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { Image, Card, Text, Group } from "@mantine/core";
import LanguageCircle from "./LanguageCircle";

interface Props {
  project: any;
}

export default function ProjectBox({ project }: Props) {
  return (
    <a href={project.github} target="_blank">
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className="w-[320px] h-[416px] my-2"
      >
        <div className="pb-2">
          <Text
            size="xl"
            fw={700}
            ta="center"
            variant="gradient"
            gradient={{ from: "rgba(87, 29, 222, 1)", to: "blue", deg: 52 }}
          >
            {project.title}
          </Text>
        </div>
        {String(project.image) && (
          <Image
            src={project.image}
            h={150}
            w="auto"
            fit="contain"
            alt="image of project"
          />
        )}
        <Text size="sm" c="dimmed" className="text-justify">
          {project.content}
        </Text>
        <div className="flex-1 align-top mt-2">
          <LanguageCircle language={project.language} />
        </div>
        <Card.Section>
          <Image src="images/A_black_image.jpeg" h={50} alt="black image" />
        </Card.Section>
      </Card>
    </a>
  );
}
