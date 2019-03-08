import React from "react";
import MyList from "../components/MyList";
const Child = props => {
  const listNameStyle = {
    color: "#0080ff",
    marginBottom: 10,
    marginTop: 14,
    fontFamily: "Arial",
    fontWeight: "bold"
  };
  const listStyle = {
    fontSize: 23,
    paddingBottom: 30
  };
  let myList = "";
  if (props.listItems) {
    myList = props.listItems.map((list, i) => {
      return <MyList key={i} myList={list} />;
    });
  }
  return (
    <div>
      <div style={listNameStyle}>{props.list}</div>
      <div style={listStyle}>{myList}</div>
    </div>
  );
};
export default Child;
