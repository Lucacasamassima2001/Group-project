/* eslint-disable react/prop-types */
import Button from "./Button";
import classes from "./ProjectSelected.module.css";

export default function ProjectSelected({ project, onDelete }) {
  return (
    <div className={classes.project} id={project.id}>
      <header className={classes.projectHeader}>
        <div className={classes.projectContainer}>
          <h1>{project.title}</h1>
          <Button onClick={onDelete} text="Delete" style="buttonSecondary" />
        </div>
        <p className={classes.projectDate}>Feb 22, 2024</p>
        <p className={classes.projectDesc}>Description for my project</p>
      </header>
    </div>
  );
}
