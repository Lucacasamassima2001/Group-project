/* eslint-disable react/prop-types */
import classes from "./Form.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useRef } from "react";
import ErrorModal from "../Modal/ErrorModal";

export default function Form({ onSave, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      dialog.current.open();
      return;
    } else {
      onSave({
        title: enteredTitle,
        description: enteredDescription,
        date: enteredDate,
        tasks: [],
      });
    }
  }
  return (
    <>
      <ErrorModal ref={dialog} />
      <div className={classes.form}>
        <div className={classes.buttons}>
          <Button onClick={onCancel} text="Cancel" style="buttonSecondary" />
          <Button onClick={handleSave} text="Save" style="buttonPrimary" />
        </div>
        <Input
          ref={title}
          placeHolder={"My Project"}
          label={"TITLE"}
          type={"text"}
        />
        <Input
          placeHolder={"Description for my project"}
          label={"DESCRIPTION"}
          text
          type={"text"}
          ref={description}
        />
        <Input
          ref={date}
          placeHolder={"My Project"}
          label={"DUE DATE"}
          type={"date"}
        />
      </div>
    </>
  );
}
