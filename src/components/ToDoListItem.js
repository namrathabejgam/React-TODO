import React, { Component } from "react";
import "../components/ToDoListItem.css";
class ToDoListItem extends Component {
  render() {
    return (
      <div onClick={this.props.onClick.bind(this, this.props.item)}>
        <div className="ToDoListItem">
          <p className="ToDoListItem-Text">{this.props.item}</p>
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
