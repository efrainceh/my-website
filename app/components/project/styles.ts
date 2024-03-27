var classNames = require("classnames");

export const card = classNames(
  "w-[calc(100vw-20vw)]",
  "sm:w-[340px]",
  "sm:h-[500px]"
);

export const carouselCard = classNames(card, "aspect-[3.4/4]");

export const text = classNames(
  "flex-1",
  "align-top",
  "text-justify",
  "my-2",
  "space-y-2"
);

export const carousel = classNames("w-[calc(100vw-20vw)]", "sm:w-[340px]");
