import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./child.css";

export const Child = props => {
  console.log(props);

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppearTimeout={500}
      transitionEnter={true}
      transitionLeave={false}
    >
      <div className="box" key={Math.random()} />
    </ReactCSSTransitionGroup>
  );
};

export const MemoizedChild = React.memo(Child);
