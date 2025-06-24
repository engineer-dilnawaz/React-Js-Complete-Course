import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export default function NewExpense({ onAddExpense }) {
  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
}
