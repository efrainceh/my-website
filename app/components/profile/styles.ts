var classNames = require("classnames");

export const profileBox = classNames("flex", "flex-col", "space-y-3");

export const image = classNames("flex", "items-center", "justify-center");

export const name = classNames(
  "text-white",
  "text-4xl",
  "font-bold",
  "text-center"
);

export const icon = classNames(
  "group",
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "w-[70px]"
);

export const iconText = classNames(
  "text-sm",
  "font-bold",
  "opacity-0",
  "group-hover:opacity-100"
);

export const iconBar = classNames("flex", "items-center", "justify-evenly");
