import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const removeHandler = (id) => {
    props.onCancel(id);
  };

  if (props.item.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found</h2>;

  return (
    <ul className="expenses-list">
      {props.item.map((x) => {
        return (
          <ExpenseItem
            key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
            id={x.id}
            onRemove={removeHandler}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
