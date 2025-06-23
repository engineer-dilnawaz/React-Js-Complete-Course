import { FC } from "react";

import { useTodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: FC = () => {
  const { items, removeTodo } = useTodosContext();

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
