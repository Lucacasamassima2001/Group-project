 /* eslint-disable react/prop-types */
import Button from "./Button";
import classes from "./Sidebar.module.css";
export default function Sidebar({ onAdd, onShow, projects }) {
  return (
    <>
      <aside className={classes.sidebar}>
        <h2>Your Projects</h2>
        <div>
          <Button
            onClick={onAdd}
            style="buttonPrimary"
            text={"+ Add Project"}
          />
        </div>
        <ul>
          {projects
            ? projects.map((project) => (
                <li key={project.id} onClick={onShow}>{project.title}</li>
              ))
            : undefined}
        </ul>
      </aside>
    </>
  );
}
