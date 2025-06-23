import { FC, FormEvent, useRef } from "react";

import classes from "./NewTodo.module.css";
import { useTodosContext } from "../store/todos-context";

const NewTodo: FC = () => {
  const { addTodo } = useTodosContext();
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
