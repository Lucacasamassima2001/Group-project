import Button from "./Button";
import classes from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <aside className={classes.sidebar}>
        <h2>Your Projects</h2>
        <Button />
      </aside>
    </>
  );
}
