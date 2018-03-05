import React, { Component } from "react";
import ReactDOM from "react-dom";
import Task from "./../presentational/Task";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          name: "Task_Manager",
          status: "In Progress",
          startDate: new Date(),
          summary: "Todo List App",
          details: "Keeps track of tasks."
        },
        {
          name: "NSU_Viewer",
          status: "Backlog",
          startDate: new Date(),
          summary: "Stock Tracker",
          details: "Keeps track of stocks, bonds, and quarterly earnings."
        },
        {
          name: "Machine Learning",
          status: "Planning Phase",
          startDate: new Date(),
          summary: "Implementing Backpropagation",
          details: "Teach a computer to recoginize numbers, etc"
        }
      ]
    };
  }

  render() {
    return (
      this.state.tasks.map((task, i) => (
        <Task
          name={task.name}
          status={task.status}
          startDate={task.startDate}
          summary={task.summary}
          details={task.details}
          key={i}
        />
      ))
    );
  }
}

export default TaskList;
const wrapper = document.getElementById("TaskList");
wrapper ? ReactDOM.render(<TaskList />, wrapper) : false;