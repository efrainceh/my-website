"use client";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaBars } from "react-icons/fa";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import Form from "./form";
import * as styles from "./styles";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(true);
  function handleCollapsedChange() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="flex">
      <div className={styles.showBtn}>
        <h1>Contact Me</h1>
        <button onClick={handleCollapsedChange}>
          <FaAngleDoubleRight />
        </button>
      </div>
      <div className={styles.stickySidebar}>
        <Sidebar
          collapsed={collapsed}
          backgroundColor="rgb(241 245 249)"
          width="fit-content"
          collapsedWidth="0px"
        >
          <Menu>
            <MenuItem>
              <div className={styles.hideBtn}>
                <h1>Contact Me</h1>
                <button onClick={handleCollapsedChange}>
                  <FaAngleDoubleLeft />
                </button>
              </div>
            </MenuItem>
            <MenuItem component={collapsed ? <></> : <Form />}></MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}
