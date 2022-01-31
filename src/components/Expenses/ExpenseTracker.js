import { useState } from "react";
import Expenses from "./Expenses";
import NewExpense from "../NewExpense/NewExpense";


const ExpenseTracker = () => {
    const expense = [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: "e4",
          title: "New Desk (wooden)",
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];
    
      const [newExpenses, setNewExpenses] = useState(expense);
    
      const addExpenseHandler = (newExpense) => {
        setNewExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
      };
    
      const deleteHandler = (id) => {
        const expenseChanged = newExpenses.filter((element) => element.id !== id);
        setNewExpenses(expenseChanged);
      };
    
      return (
        <div>
          <NewExpense onAddExpense={addExpenseHandler} />
          <div>
            <Expenses exp={newExpenses} onDelete={deleteHandler} />
          </div>
        </div>
      );
};

export default ExpenseTracker;