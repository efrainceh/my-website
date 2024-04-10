"use client";
import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProjectBox from "./ProjectBox";
import * as styles from "./styles";

interface Props {
  projects: any;
}

export default function ProjectCarousel({ projects }: Props) {
  const autoplay = useRef(Autoplay({ delay: 1000 }));
  const slides = projects.map((project: any) => (
    <Carousel.Slide key={project.title}>
      <ProjectBox project={project} carousel={true} />
    </Carousel.Slide>
  ));
  return (
    <div className={styles.carousel}>
      <Carousel
        height="100%"
        loop
        withIndicators
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </div>
  );
}
