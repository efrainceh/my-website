import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { FaCode } from "react-icons/fa";
import Icon from "./Icon";

interface Props {
  project: any;
}

export default function ProjectBox({ project }: Props) {
  return (
    <div className="grid grid-flow-row auto-rows-max place-items-center bg-cyan-200 rounded-lg w-[352px] h-[416px] my-4">
      <div className="flex py-2 place-content-center">
        <h1 className="text-3xl font-bold text-center p-2">{project.title}</h1>
        <Icon
          internal={false}
          href={project.github}
          target={"_blank"}
          iconName={<FaCode size="1.5em" />}
          text={"code"}
        />
      </div>
      <div className="flex w-[300px] h-[150px] justify-center items-center relative">
        <Image src={project.image} fill alt="image of project" />
      </div>
      <ReactMarkdown className="text-justify p-4">
        {project.content}
      </ReactMarkdown>
    </div>
  );
}
