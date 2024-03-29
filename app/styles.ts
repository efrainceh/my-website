var classNames = require("classnames");

export const flexGrid = classNames(
  "flex",
  "flex-col",
  "items-center",
  "justify-around",
  "space-y-4",
  "pb-4",
  "overflow-auto",
  "min-h-screen",
  "sm:flex-row"
);

export const profile = classNames(
  "flex",
  "flex-col",
  "items-center",
  "justify-center"
);

export const body = classNames(
  "bg-gradient-to-r",
  "from-indigo-500",
  "via-purple-500",
  "to-blue-500",
  "min-h-screen"
);

export const sidebar = classNames("absolute");
