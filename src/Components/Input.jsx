/* eslint-disable react/prop-types */
import classes from "./Input.module.css";

export default function Input({ placeHolder, label, text, type }) {
  return (
    <>
      <div className={classes.styled__input}>
        <label htmlFor="">{label}</label>
        {text ? (
          <textarea placeholder={placeHolder}></textarea>
        ) : (
          <input placeholder={placeHolder} type={type} />
        )}
      </div>
    </>
  );
}
