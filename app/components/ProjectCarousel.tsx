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
    <div className="w-[340px]">
      <Carousel
        height="100%"
        loop
        withIndicators
        withControls={false}
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
    </div>
  );
}
