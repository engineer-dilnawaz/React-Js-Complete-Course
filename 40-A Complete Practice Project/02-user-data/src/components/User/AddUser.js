import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

export default function AddUser({ onSubmit }) {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid user name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age>0)",
      });

      return;
    }

    onSubmit({ name: enteredUsername, age: enteredAge, id: Date.now() });
    setUsername("");
    setEnteredAge("");
  }

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function errorHandler() {
    setError(null);
  }
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
