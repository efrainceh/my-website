var classNames = require("classnames");

export const innerSizes = classNames("w-[calc(100vw-40vw)]", "max-w-[280px]");

export const profileBox = classNames(
  "flex",
  "flex-col",
  "items-center",
  "space-y-3",
  "w-[calc(100vw-25vw)]",
  "max-w-[300px]"
);

export const image = classNames(
  innerSizes,
  "aspect-square",
  "relative",
  "object-contain"
);

export const name = classNames(
  "text-white",
  "font-bold",
  "text-center",
  "text-2xl",
  "xs:text-4xl"
);

export const icon = classNames(
  "group",
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "w-[calc(100vw-80vw)]",
  "max-w-[70px]"
);

export const iconSize = classNames("text-2xl", "xs:text-4xl");

export const iconText = classNames(
  "text-xs",
  "xs:text-sm",
  "font-bold",
  "opacity-0",
  "group-hover:opacity-100"
);

export const iconBar = classNames(
  innerSizes,
  "flex",
  "items-center",
  "justify-evenly"
);
