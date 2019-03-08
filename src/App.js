import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import ListBar from "./components/ListBar";
var show = false;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false,
      selectedIndex: -1,
      selectedListName: "",
      passedText: ""
      //show: false
    };
    this.changeIndexAndName = this.changeIndexAndName.bind(this);
    this.passTask = this.passTask.bind(this);
    this.resetData = this.resetData.bind(this);
  }
  changeIndexAndName(newIndex, newName) {
    this.setState({
      selectedIndex: newIndex,
      selectedListName: newName
    });
  }

  passTask(text) {
    show = true;
    this.setState({
      passedText: text
    });
  }
  resetData() {
    this.setState({
      selectedIndex: -1,
      selectedListName: "",
      passedText: ""
    });
  }
  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };
  render() {
    var listBar = <ListBar onClick={this.changeIndexAndName} />;
    if (show) {
      show = false;
      listBar = (
        <ListBar
          onClick={this.changeIndexAndName}
          text={this.state.passedText}
          selectedIndex={this.state.selectedIndex}
        />
      );
    }
    return (
      <div className="screen">
        <div className="screen top">
          <button className="open-modal-btn" onClick={this.openModalHandler}>
            + New
          </button>
          <p
            style={{
              color: "#036cd4",
              fontFamily: "Arial",
              fontSize: 20,
              marginTop: 25
            }}
          >
            PLEASE SELECT ANY LIST YOU WANT TO ADD THE TASK TO
          </p>
        </div>
        <div className="screen bottom">
          <div className="left">{listBar}</div>
          <div className="right">
            <div
              style={{
                display: this.state.isShowing ? "inline" : "none"
              }}
            >
              <Modal
                show={this.state.isShowing}
                close={this.closeModalHandler}
                index={this.state.selectedIndex}
                listName={this.state.selectedListName}
                onAddTask={this.passTask}
                onCloseModal={this.resetData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
