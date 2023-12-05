import React from "react";
import { SiGithub, SiLinkedin, SiFiles, SiReaddotcv } from "react-icons/si";
import Icon from "./Icon";

export default function IconBar() {
  return (
    <div className="flex place-content-evenly py-4">
      <Icon
        internal={false}
        href={"https://www.linkedin.com/in/efrain-ceh-pavia/"}
        target={"_blank"}
        iconName={<SiLinkedin size="2em" />}
        text={"LinkedIn"}
      />
      <Icon
        internal={false}
        href={"https://github.com/efrainceh"}
        target={"_blank"}
        iconName={<SiGithub size="2em" />}
        text={"Github"}
      />
      <Icon
        internal={true}
        href={"test.pdf"}
        target={"_blank"}
        iconName={<SiReaddotcv size="2em" />}
        text={"Resume"}
      />
      <Icon
        internal={true}
        href={"/projects"}
        target={"_self"}
        iconName={<SiFiles size="2em" />}
        text={"Projects"}
      />
    </div>
  );
}
