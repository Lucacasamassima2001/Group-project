import classes from "./Form.module.css";
import Input from "./Input";

export default function Form() {
  return (
    <>
      <form action="">
        <Input placeHolder={"My Project"} label={"TITLE"} type={"text"} />
        <Input
          placeHolder={"Description for my project"}
          label={"DESCRIPTION"}
          text
          type={"text"}
        />
        <Input placeHolder={"My Project"} label={"DUE DATE"} type={"date"} />
      </form>
    </>
  );
}
