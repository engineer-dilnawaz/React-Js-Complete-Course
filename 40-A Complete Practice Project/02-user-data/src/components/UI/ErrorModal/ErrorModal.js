import classes from "./ErrorModal.module.css";

import Button from "../Button/Button";
import Card from "../Card/Card";

export default function ErrorModal({ title, message, onConfirm }) {
  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Close</Button>
        </footer>
      </Card>
    </div>
  );
}
