/* eslint-disable react/prop-types */
import classes from "./Button.module.css";

export default function Button({ onClick, text, style }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${classes.button} ${classes[style]}`}
      >
        {text}
      </button>
    </>
  );
}
