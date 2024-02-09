/* eslint-disable react/prop-types */
import Button from "./Button";
import Input from "./Input";
import classes from "./ProjectSelected.module.css";

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
      <div className={classes.tasks}>
        <Input
          label={"Tasks"}
          onClick={onAddTask}
          button
          buttonText={"add new task"}
        />
      </div>
      <div className="tasks">
        {project.tasks.map((task, index) => (
          <h1 key={index}>{task.name}</h1>
        ))}
      </div>
    </div>
  );
}
