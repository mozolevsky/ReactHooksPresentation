import React, { memo } from "react";

export const Wrapper = memo(props => {
  console.log("Wrapper rerendered", props);
  return <div>{props.children}</div>;
});
