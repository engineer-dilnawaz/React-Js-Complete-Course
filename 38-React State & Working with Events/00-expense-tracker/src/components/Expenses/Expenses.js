import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function onFilterYearChange(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={onFilterYearChange}
        />
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
