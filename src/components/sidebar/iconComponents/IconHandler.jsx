import React from "react";

export const IconHandler = (props) => {

  const ModIcon = { ...props.children };
  ModIcon.props = { props: props.children.props, hover: props.hover };

  return <>{ModIcon}</>;
};
