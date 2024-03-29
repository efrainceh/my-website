var classNames = require("classnames");

export const innerSizes = classNames("w-[calc(100vw-40vw)]", "max-w-[280px]");

export const ratingGrid = classNames(innerSizes, "grid", "grid-cols-2");

export const leftSide = classNames(
  "text-lg",
  "xs:text-2xl",
  "font-semibold",
  "place-self-start"
);

export const rightSide = classNames("place-self-center");

export const desktop = classNames("hidden", "xs:block");

export const mobile = classNames("block", "xs:hidden");
