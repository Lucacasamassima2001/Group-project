/* eslint-disable react/prop-types */
import Button from "./Button";
import classes from "./ProjectSelected.module.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function ProjectSelected({ project, onDelete, onAddTask }) {
  return (
    <div className={classes.project} id={project.id}>
      <header className={classes.projectHeader}>
        <div className={classes.projectContainer}>
          <h1>{project.title}</h1>
          <Button onClick={onDelete} text="Delete" style="buttonSecondary" />
        </div>
        <p className={classes.projectDate}>{project.date}</p>
        <p className={classes.projectDesc}>{project.description}</p>
      </header>
      <div>
        <TaskForm onSave={onAddTask} />
      </div>
      <Task tasks={project.tasks} />
    </div>
  );
}
