// "use client";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import * as styles from "./styles";

export default function SideBarBtn() {
  //   const [toggled, setToggled] = useState(false);

  //   const [collapsed, setCollapsed] = useState(true);

  //   const handleCollapsedChange = () => {
  //     setCollapsed(!collapsed);
  //   };

  //   const handleToggleSidebar = (value: boolean) => {
  //     setToggled(value);
  //   };

  return (
    <button className={styles.showBtn}>
      Contact Me
      <FaAngleDoubleRight />
    </button>
  );
}
