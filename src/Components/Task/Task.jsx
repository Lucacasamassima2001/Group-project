/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import classes from "./Task.module.css";
export default function Task({ tasks, onDelete }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul className={classes.tasks__list}>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.addedTask}</span>
              <Button
                onClick={() => onDelete(task.id)}
                text={"Clear"}
                style={"buttonSecondary"}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={classes.no__tasks}>
          This project does not have any tasks yet
        </p>
      )}
    </div>
  );
}
