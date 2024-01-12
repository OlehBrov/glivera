import React from "react";
import { Menu } from "../menu/Menu";

export const Sidebar = (props) => {
  const screen = props?.currentScreen;
  return (
    <div className="sidebar_container">
      <Menu closeMenu={props.closeMenu} screen={screen} />
      
    </div>
  );
};
