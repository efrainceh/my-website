var classNames = require("classnames");

export const stickySidebar = classNames("fixed", "top-0", "left-0", "z-20");

export const form = classNames(
  "flex",
  "flex-col",
  "space-y-4",
  "w-[300px]",
  "sm:w-[400px]",
  "h-screen"
);

export const inputDiv = classNames("flex", "flex-col", "px-2");

export const input = classNames("w-[250px]", "border", "border-slate-400");

export const inputMessage = classNames("flex-1", "border", "border-slate-400");

export const btn = classNames("py-1", "border-2", "rounded-lg");

export const sendBtn = classNames(
  btn,
  "text-white",
  "font-semibold",
  "w-[100px]",
  "bg-blue-500",
  "place-self-center",
  "place-items-center"
);

export const showBtn = classNames(
  btn,
  "flex",
  "items-center",
  "justify-around",
  "text-xs",
  "font-semibold",
  "w-[100px]",
  "bg-slate-100",
  "mt-4",
  "ml-4",
  "xs:text-base",
  "xs:w-[150px]"
);

export const hideBtn = classNames(
  "flex",
  "items-center",
  "justify-around",
  "text-xs",
  "font-semibold",
  "w-[100px]",
  "xs:text-base",
  "xs:w-[150px]"
);
