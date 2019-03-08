import React from "react";
import ToDoListItem from "../components/ToDoListItem";
import "../components/ListBar.css";
import Child from "../components/Child";
//var child = "";
class ListBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this is where the data goes
      list: [
        {
          listName: "Personal",
          subTasks: []
        },
        {
          listName: "Work",
          subTasks: []
        },
        {
          listName: "Grocery List",
          subTasks: []
        }
      ],
      listName: "",
      open: false,
      child: ""
    };
    this.select = this.select.bind(this);
    //this.addTask = this.addTask.bind(this);
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  select(key) {
    let index = -1;
    for (let i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].listName === key) index = i;
    }
    this.props.onClick(index, this.state.list[index].listName);
    this.setState({
      child: (
        <Child
          list={this.state.list[index].listName}
          listItems={this.state.list[index].subTasks}
        />
      )
    });
  }
  addSubTask = () => {
    if (this.props.selectedIndex === -1) return;
    const newList = this.state.list;
    this.setState({
      //list[this.props.selectedIndex].subTasks:list[this.props.selectedIndex].subTasks.push(this.props.text)
      //list[selectedIndex].subTasks:list[selectedIndex].subTasks.push(this.props.text)
      list: newList[this.props.selectedIndex].subTasks.push(this.props.text)
    });
  };
  createNewlistName = () => {
    let subTasks = [];
    this.setState(({ list, listName }) => ({
      list: [
        ...list,
        {
          listName,
          subTasks
        }
      ],
      listName: ""
    }));
  };
  handleKeyPress = e => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.createNewlistName();
      }
    }
  };
  handleInput = e => {
    this.setState({
      listName: e.target.value
    });
  };
  componentWillReceiveProps(nextProps) {
    //this.addSubTask();
    //alert(nextProps.selectedIndex + " " + nextProps.text);
    if (nextProps.selectedIndex !== undefined && nextProps.text !== undefined) {
      if (nextProps.selectedIndex !== -1) {
        const newList = this.state.list;
        newList[nextProps.selectedIndex].subTasks.push(
          nextProps.text /*nextProps.text*/
        );
        this.setState({
          list: newList,
          child: (
            <Child
              list={this.state.list[nextProps.selectedIndex].listName}
              listItems={this.state.list[nextProps.selectedIndex].subTasks}
            />
          )
        });
      }
    }
  }
  render() {
    return (
      <div>
        <div className="list-contents">{this.state.child}</div>
        <div className="List-Container">
          <p className="List-Header">MY LISTS</p>
          <div className="List-Content">
            {this.state.list.map((item, key) => {
              return (
                <ToDoListItem
                  className="List-Item"
                  key={key}
                  item={item.listName}
                  onClick={this.select}
                />
              );
            })}
          </div>
          <div className="Text-Input-Wrapper">
            <input
              className="Text-Input"
              type="text"
              placeholder="+New List"
              value={this.state.listName}
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ListBar;
