import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function onFilterYearChange(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filtredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={onFilterYearChange}
        />
        <ExpensesChart expenses={filtredExpenses} />
        <ExpensesList items={filtredExpenses} />
      </Card>
    </div>
  );
}
