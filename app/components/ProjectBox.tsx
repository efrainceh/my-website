"use client";

import React from "react";
// import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { SiGithub } from "react-icons/si";
import Icon from "./Icon";

import { Button, Badge, Image, Group, Card, Text } from "@mantine/core";

interface Props {
  project: any;
}

export default function ProjectBox({ project }: Props) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="w-[320px] h-[416px] my-2"
    >
      <Group gap="sm" justify="center">
        <div className="pb-4">
          <Text size="xl" fw={700}>
            {project.title}
          </Text>
        </div>
        <Icon
          internal={false}
          href={project.github}
          target={"_blank"}
          iconName={<SiGithub size="1.1em" />}
          text={"Code"}
        />
      </Group>
      {String(project.image) && (
        <Image
          src={project.image}
          h={150}
          w="auto"
          fit="contain"
          alt="image of project"
        />
      )}
      <Text size="sm" c="dimmed" className="flex-1 text-justify">
        {project.content}
      </Text>
      <Card.Section>
        <Image src="images/A_black_image.jpeg" h={50} alt="black image" />
      </Card.Section>
    </Card>
  );
}
