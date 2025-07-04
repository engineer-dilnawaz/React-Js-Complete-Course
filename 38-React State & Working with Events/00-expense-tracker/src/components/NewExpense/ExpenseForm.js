import { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput((prev) => ({
    //   ...prev,
    //   enteredTitle: event.target.value,
    // }));
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUserInput((prev) => ({
    //   ...prev,
    //   enteredAmount: event.target.value,
    // }));
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUserInput((prev) => ({
    //   ...prev,
    //   enteredDate: event.target.value,
    // }));
  }

  //   function inputChangeHandler(identitfier, value) {
  //     if (identitfier === "title") {
  //       setEnteredTitle(value);
  //     } else if (identitfier === "date") {
  //       setEnteredDate(value);
  //     } else {
  //       setEnteredAmount(value);
  //     }
  //   }

  function onSubmitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.1"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
