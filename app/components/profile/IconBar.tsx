import React from "react";
import Icon from "./Icon";
import { SiGithub, SiLinkedin, SiFiles, SiReaddotcv } from "react-icons/si";
import * as styles from "./styles";

export default function IconBar() {
  const internal = [false, false, true, true];
  const hrefs = [
    "https://www.linkedin.com/in/efrain-ceh-pavia/",
    "https://github.com/efrainceh",
    "Efrain-Ceh-Pavia.pdf",
    "/projects",
  ];
  const targets = ["_blank", "_blank", "_blank", "_self"];
  const iconNames = [
    <SiLinkedin key={0} size="2em" />,
    <SiGithub key={1} size="2em" />,
    <SiReaddotcv key={2} size="2em" />,
    <SiFiles key={3} size="2em" />,
  ];
  const texts = ["LinkedIn", "Github", "Resume", "Projects"];

  const icons: React.JSX.Element[] = [];
  for (var ix = 0; ix < hrefs.length; ix++) {
    icons.push(
      <Icon
        key={texts[ix]}
        internal={internal[ix]}
        href={hrefs[ix]}
        target={targets[ix]}
        iconName={iconNames[ix]}
        text={texts[ix]}
      />
    );
  }

  return <div className={styles.iconBar}></div>;
}
