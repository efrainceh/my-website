"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import ProjectBox from "./ProjectBox";

interface Props {
  projects: any;
}

export default function ProjectCarousel({ projects }: Props) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      withIndicators
      loop
      withControls={false}
      height="100%"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {projects.map((project: any) => (
        <Carousel.Slide key={project.title}>
          <ProjectBox project={project} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
