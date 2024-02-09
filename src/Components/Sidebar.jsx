/* eslint-disable react/prop-types */
import Button from "./Button";
import classes from "./Sidebar.module.css";
export default function Sidebar({ onAdd, onShow, projects }) {
  return (
    <>
      <aside className={classes.sidebar}>
        <h2>Your Projects</h2>
        <Button onClick={onAdd} style="buttonPrimary" text={"+ Add Project"} />
        <ul>
          {projects
            ? projects.map((project, index) => (
                <li id={project.id} onClick={onShow} key={index}>
                  {project.title}
                </li>
              ))
            : undefined}
        </ul>
      </aside>
    </>
  );
}
