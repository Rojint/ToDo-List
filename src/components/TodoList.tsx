import { Fragment } from "react";
import Styles from "../Styles/TodoList.module.css";
import { ITask } from "../interfaces";

interface Props {
  tasks: ITask[];
  deleteTask(taskName: string): void;
  completeTask(taskName: string): void;
}

const TodoList = ({ tasks, deleteTask, completeTask }: Props) => {
  return (
    <Fragment>
      <div className={Styles["items-container"]}>
        <div className={Styles["title-container"]}>
          <h2 className={Styles["todo-list-title"]}> Todo List</h2>
        </div>
        {/* <div className={Styles["status-container"]}>
          <label>Filter by status:</label>
          <select id="status-filter" onChange={(e) => alert(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
          </select>
        </div> */}

        <ul id="todo-list">
          {tasks.map((task: ITask, key: number) => {
            return (
              <li
                className={
                  Styles[task.completed ? "todo-completed" : "todo-wrapper"]
                }
              >
                <div className={Styles["todo-inner"]}>
                  <h1>
                    {task.title} - {task.deadline} Days
                  </h1>
                  <div className={Styles["todo-buttons"]}>
                    <a
                      onClick={() => completeTask(task.title)}
                      className={Styles["complete-task"]}
                    >
                      {task.completed ? "Undone" : "Done"}
                    </a>
                    <a
                      onClick={() => deleteTask(task.title)}
                      className={Styles["remove-task"]}
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className={Styles["todo-inner"]}>
                  <span>{task.description}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default TodoList;
