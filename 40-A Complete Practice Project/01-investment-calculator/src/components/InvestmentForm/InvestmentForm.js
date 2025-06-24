import { useState } from "react";
import classes from "./InvestmentForm.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

export default function InvestmentForm({ onCalculate }) {
  const [userInput, setUserInput] = useState(initialUserInput);

  function submitHandler(event) {
    event.preventDefault();
    onCalculate(userInput);
  }

  function resetHandler() {
    setUserInput(initialUserInput);
  }

  function inputChangeHandler(identifier, value) {
    setUserInput((prev) => ({
      ...prev,
      [identifier]: +value,
    }));
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
