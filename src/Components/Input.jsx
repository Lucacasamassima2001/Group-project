/* eslint-disable react/prop-types */
import Button from "./Button";
import classes from "./Input.module.css";
import { forwardRef } from "react";
const Input = forwardRef(function Input(
  { placeHolder, label, text, type, button },
  ref
) {
  return (
    <>
      <div className={classes.styled__input}>
        <label htmlFor="" className={button ? classes.boldLabel : undefined}>
          {label}
        </label>
        <div className={classes.styled__input__task}>
          {text ? (
            <textarea ref={ref} placeholder={placeHolder}></textarea>
          ) : (
            <input
              ref={ref}
              name={"task"}
              placeholder={placeHolder}
              type={type}
            />
          )}
          {button ? (
            <Button text={"Add task"} style={"buttonSecondary"} />
          ) : undefined}
        </div>
      </div>
    </>
  );
});

export default Input;
