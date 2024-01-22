import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { IconHandler } from "./iconComponents/IconHandler";

import { ReactComponent as Chevron } from "../../images/chevron.svg"


export const SidebarMenuItem = (props) => {
  const [hover, setHover] = useState(false);
  
  const { icon } = props;

  return (
    <NavLink
      className="nav-link"
      to={props.path}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={props?.closeMenu}
    >
          <IconHandler hover={hover}>{icon}</IconHandler>  {props.text}
          <Chevron className="chevron"/>
    </NavLink>
  );
};
