/* eslint-disable react/prop-types */
import Button from "./Button";
import classes from "./Input.module.css";

export default function Input({ placeHolder, label, text, type, button }) {
  return (
    <>
      <div className={classes.styled__input}>
        <label htmlFor="" className={button ? classes.boldLabel : undefined}>
          {label}
        </label>
        <div className={classes.styled__input__task}>
          {text ? (
            <textarea placeholder={placeHolder}></textarea>
          ) : (
            <input name={"task"} placeholder={placeHolder} type={type} />
          )}
          {button ? (
            <Button text={"Add task"} style={"buttonSecondary"} />
          ) : undefined}
        </div>
      </div>
    </>
  );
}
