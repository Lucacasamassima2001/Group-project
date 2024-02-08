import classes from "./Button.module.css";

export default function Button({ text, style }) {
  return (
    <>
      <button className={`${classes.button} ${classes[style]}`}>{text}</button>
    </>
  );
}
