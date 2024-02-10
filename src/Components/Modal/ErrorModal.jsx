/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./ErrorModal.module.css";
import Button from "../Button/Button";
const ErrorModal = forwardRef(function ResultModal({ onReset }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog className={classes.ErrorModal} ref={dialog} onClose={onReset}>
      <div className={classes.modal__container} onSubmit={onReset}>
        <h2>Invalid Input</h2>
        <p>Oops... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
        <form className={classes.form__modal} method="dialog">
          <Button text={"Okay"} style={"buttonPrimary"} />
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ErrorModal;
