import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';



function Expenses (props) {
    const removeHandler = id => {
        props.onDelete(id);
    }
    return (
        <Card className='expenses'>
            {props.exp.map(x => {
                // console.log(x.id);
                return <ExpenseItem title = {x.title} amount = {x.amount} date = {x.date} id = {x.id} onRemove = {removeHandler} />
            })}
        </Card>
    );
}

export default Expenses;