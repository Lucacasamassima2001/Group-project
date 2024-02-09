/* eslint-disable react/prop-types */
import classes from "./TaskForm.module.css";
import Button from "./Button/Button";
import Input from "./Input/Input";
import { useRef } from "react";
export default function TaskForm({ onSave }) {
  const newTask = useRef();
  function handleSaveTask() {
    const enteredTask = newTask.current.value;
    onSave(enteredTask);
  }
  return (
    <div className={classes.tasks__input__container}>
      <Input ref={newTask} label={"Tasks"} />
      <div className={classes.task__button}>
        <Button
          onClick={handleSaveTask}
          text={"Add Task"}
          style={"buttonSecondary"}
        />
      </div>
    </div>
  );
}
