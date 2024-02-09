/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import classes from "./Content.module.css";
export default function Content({ onAdd }) {
  return (
    <>
      <div className={classes.content}>
        <div className={classes.no__project}>
          <img src="/public/no-projects.png" alt="" />
          <h2>No projects selected</h2>
          <h3>Select a project or get started with a new one</h3>
          <Button
            onClick={onAdd}
            style="buttonPrimary"
            text={"Create New Project"}
          />
        </div>
      </div>
    </>
  );
}
