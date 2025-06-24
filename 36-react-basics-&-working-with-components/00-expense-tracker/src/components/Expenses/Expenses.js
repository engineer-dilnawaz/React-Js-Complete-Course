import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
