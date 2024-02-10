/* eslint-disable react/prop-types */
import classes from "./TaskForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useRef } from "react";
import ErrorModal from "../Modal/ErrorModal";
export default function TaskForm({ onSave }) {
  const dialog = useRef();
  const newTask = useRef();
  function handleSaveTask() {
    if (newTask.current.value.trim() === "") {
      dialog.current.open();
      return;
    } else {
      const enteredTask = newTask.current.value;
      onSave(enteredTask);
    }
  }
  return (
    <div className={classes.tasks__input__container}>
      <ErrorModal ref={dialog} />
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
