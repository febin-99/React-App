import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const clickHandler = () => {
    setContent(expenseForm);
  };
  const submitClickHandler = () => {
    setContent(addData);
  };
  let addData = <button onClick={clickHandler}>Add New Expense</button>;
  let expenseForm = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onSubmitClick={submitClickHandler}
    />
  );
  const [content, setContent] = useState(addData);

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
