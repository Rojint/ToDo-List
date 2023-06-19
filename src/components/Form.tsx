import { ChangeEvent, Fragment, useState } from "react";
import Styles from "../Styles/form.module.css";
import { ITask } from "../interfaces";
import TodoList from "./TodoList";
const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "description") {
      setDescription(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask: ITask = {
      title: title,
      description: description,
      deadline: deadline,
      completed: completed,
    };
    setTodoList([...todoList, newTask]);
    console.log(newTask);
  };

  const deleteTask = (taskName: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.title !== taskName;
      })
    );
  };
  const completeTask = (taskName: string): void => {
    setTodoList(
      todoList.filter((task) => {
        if (task.title == taskName)
          if (task.completed) {
            task.completed = false;
          } else {
            task.completed = true;
          }
        return task;
      })
    );
  };

  return (
    <Fragment>
      <div className={Styles.container}>
        <div>
          <h2 className={Styles["new-task"]}> Create New Task</h2>
          <div className={Styles["create-new-task"]}>
            <div className={Styles.inputBx}>
              <p className={Styles.pinput}> Title </p>
              <input
                type="text"
                name="title"
                value={title}
                onChange={changeHandler}
              />
            </div>
            <div className={Styles.inputBx}>
              <p className={Styles.pinput}> Description </p>
              <input
                type="text"
                name="description"
                value={description}
                onChange={changeHandler}
              />
            </div>
            <div className={Styles.inputBx}>
              <p className={Styles.pinput}> Deadline </p>
              <input
                type="number"
                name="deadline"
                value={deadline}
                onChange={changeHandler}
              />
            </div>

            <div className={Styles.inputBx}>
              <p className={Styles.pinput}>Status</p>
              <select
                onChange={(e) =>
                  setCompleted(e.target.value == "1" ? true : false)
                }
              >
                <option value={1}>Completed</option>
                <option value={0}>In Porgress</option>
              </select>
            </div>
            <button type="button" onClick={addTask} className={Styles.add}>
              Add
            </button>
          </div>
        </div>
      </div>

      <div>
        {/* {todoList.map((task: ITask, key: number) => { */}
        <TodoList
          tasks={todoList}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
        ;{/* })} */}
      </div>
    </Fragment>
  );
};

export default Form;
