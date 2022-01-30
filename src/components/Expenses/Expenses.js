import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseCharts from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const changeFilterHandler = (value) => {
    setSelectedYear(value);
  };

  const filteredExpenses = props.exp.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  const cancelHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={changeFilterHandler}
          year={selectedYear}
        />
        <ExpenseCharts expenses={filteredExpenses} />
        <ExpensesList item={filteredExpenses} onCancel={cancelHandler} />
      </Card>
    </li>
  );
}

export default Expenses;
