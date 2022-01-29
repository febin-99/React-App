import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';



function Expenses (props) {
    return (
        <Card className='expenses'>
            {props.exp.map(x => {
                return <ExpenseItem title = {x.title} amount = {x.amount} date = {x.date} />
            })}
        </Card>
    );
}

export default Expenses;