var classNames = require("classnames");

export const grid = classNames(
  "grid",
  "grid-cols-1",
  "place-items-center",
  "p-4",
  "gap-4",
  "overflow-auto",
  "sm:grid-cols-2",
  "lg:grid-cols-3",
  "2xl:grid-cols-3"
);

export const iconMargin = classNames("ml-[125px] xs:ml-[200px]", "pt-4");

export const iconSize = classNames("text-2xl", "xs:text-4xl");
