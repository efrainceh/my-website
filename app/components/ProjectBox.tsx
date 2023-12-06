"use client";

import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { SiGithub } from "react-icons/si";
import Icon from "./Icon";

import { Group, Card, Text } from "@mantine/core";

interface Props {
  project: any;
}

export default function ProjectBox({ project }: Props) {
  return (
    <Card shadow="lg" p="xl" withBorder className="w-[320px] h-[416px] my-1">
      <Card.Section>
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
      </Card.Section>
      <Card.Section>
        {String(project.image) && (
          <Image
            src={project.image}
            width={320}
            height={150}
            alt="image of project"
          />
        )}
      </Card.Section>
      <ReactMarkdown className="flex-1 text-xs text-justify my-1">
        {project.content}
      </ReactMarkdown>
      <Card.Section>
        <div className="bg-black h-[25px]"></div>
      </Card.Section>
    </Card>
  );
}

// <Card
// shadow="lg"
// p="xl"
// withBorder
// className="grid grid-cols-1 place-items-center w-[320px] h-[416px] my-1"
// >
// <Group gap="sm" justify="center">
//   <div className="pb-4">
//     <Text size="xl" fw={700}>
//       {project.title}
//     </Text>
//   </div>
//   <Icon
//     internal={false}
//     href={project.github}
//     target={"_blank"}
//     iconName={<SiGithub size="1.1em" />}
//     text={"Code"}
//   />
// </Group>
// {String(project.image) && (
//   <div className="flex-1 justify-center items-center relative h-[150px]">
//     <Image src={project.image} fill alt="image of project" />
//   </div>
// )}
// <ReactMarkdown className="text-xs text-justify">
//   {project.content}
// </ReactMarkdown>
// <Card.Section>
//   <div className="bg-black h-[10px]"></div>
// </Card.Section>
// </Card>
