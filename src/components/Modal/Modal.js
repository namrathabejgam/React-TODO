import React from "react";
import "./Modal.css";
var input = "";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.changeInput = this.changeInput.bind(this);
    this.onAddTaskSubmit = this.onAddTaskSubmit.bind(this);
  }
  onAddTaskSubmit() {
    var str = this.state.input;
    if (str !== "") {
      this.props.onAddTask(str);
    }
    this.setState({ input: "" });
    this.props.close();
  }
  changeInput(e) {
    var newInput = e.target.value;
    this.setState({ input: newInput });
  }
  render() {
    return (
      <div>
        <div
          className="modal-wrapper"
          style={{
            transform: this.props.show
              ? "translateY(0vh)"
              : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
            display: this.props.show ? "block" : "none"
          }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-body-left">
                <input
                  onChange={this.changeInput.bind(this)}
                  className="reminder-content"
                  type="text"
                  placeholder="I want to..."
                  id="taskInput"
                  value={this.state.input}
                />
                <p>{this.props.children}</p>
              </div>
              <div className="modal-body-right">
                <div className="list">
                  <p>LIST:</p>
                </div>
                <p>{this.props.listName}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="addTask-button"
                onClick={this.onAddTaskSubmit.bind(this)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
