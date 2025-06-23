import { createContext, FC, useContext, useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: string) => void;
};

const TodosContext = createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: FC = (props) => {
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoHandler(todoText: string) {
    const newTodo = new Todo(todoText);
    // setTodos((prev) => [newTodo, ...prev]);
    setTodos((prev) => prev.concat(newTodo));
  }

  function removeTodoHandler(todoId: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  }

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

export const useTodosContext = () => {
  return useContext(TodosContext);
};
