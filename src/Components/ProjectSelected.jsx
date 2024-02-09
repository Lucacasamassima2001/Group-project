import Button from "./Button";
import classes from "./ProjectSelected.module.css";

export default function ProjectSelected() {
  return (
    <div className={classes.project}>
      <header className={classes.projectHeader}>
        <div className={classes.projectContainer}>
          <h1>My project</h1>
          <Button text="Delete" style="buttonSecondary" />
        </div>
        <p className={classes.projectDate}>Feb 22, 2024</p>
        <p className={classes.projectDesc}>Description for my project</p>
      </header>
    </div>
  );
}
