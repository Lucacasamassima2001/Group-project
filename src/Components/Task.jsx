/* eslint-disable react/prop-types */
import Button from "./Button";
import classes from "./Task.module.css";

export default function Task({ tasks }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul className={classes.tasks__list}>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.addedTask}</span>
              <Button text={"Clear"} style={"buttonSecondary"} />
            </li>
          ))}
        </ul>
      ) : (
        <p>This project does not have any tasks yet</p>
      )}
    </div>
  );
}
