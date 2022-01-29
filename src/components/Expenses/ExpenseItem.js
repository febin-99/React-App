import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// import React, {useState} from 'react';


function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    props.onRemove(props.id);
  };
  // console.log(props.id)
  return (
    <Card className="expense-item">
          <div>
            <ExpenseDate date = {props.date} />
          </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{'$ ' + props.amount}</div>
      </div>
      <button className = 'expense-item__delete' onClick={clickHandler}>Remove</button>
    </Card>
  );
}

export default ExpenseItem;
