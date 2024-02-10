/* eslint-disable react/prop-types */
import classes from "./TaskForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useRef } from "react";
import ErrorModal from "../Modal/ErrorModal";
export default function TaskForm({ onSave, data }) {
  const dialog = useRef();
  const newTask = useRef();
  function handleSaveTask() {
    if (newTask.current.value.trim() === "") {
      dialog.current.open();
      return;
    } else {
      const enteredTask = newTask.current.value;
      onSave(enteredTask);
      newTask.current.value = "";
    }
  }
  return (
    <div className={classes.tasks__input__container}>
      <ErrorModal ref={dialog} />
      <Input
        data={data}
        placeHolder={data.tasks.length === 0 ? "Add Task" : "Add another Task"}
        ref={newTask}
        label={"Tasks"}
      />
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
