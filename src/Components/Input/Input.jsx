/* eslint-disable react/prop-types */
import classes from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { placeHolder, label, text, type, data },
  ref
) {
  return (
    <>
      <div className={classes.styled__input}>
        <label htmlFor="">{label}</label>
        <div className={classes.styled__input__task}>
          {text ? (
            <textarea ref={ref} placeholder={placeHolder}></textarea>
          ) : (
            <input
              data={data}
              ref={ref}
              name={"task"}
              placeholder={placeHolder}
              type={type}
            />
          )}
        </div>
      </div>
    </>
  );
});

export default Input;
