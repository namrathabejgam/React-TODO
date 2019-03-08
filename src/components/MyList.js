import React from "react";

const myList = props => {
  return <div onClick={props.handleClick}>{props.myList}</div>;
};
export default myList;
