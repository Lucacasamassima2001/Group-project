/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import classes from "./ProjectSelected.module.css";
import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";

export default function ProjectSelected({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
}) {
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
        <TaskForm data={project} onSave={onAddTask} />
      </div>
      <Task onDelete={onDeleteTask} tasks={project.tasks} />
    </div>
  );
}
