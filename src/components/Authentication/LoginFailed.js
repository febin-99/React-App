import Card from "../UI/Card";
import './LoginFailed.css';

const LoginFailed = (props) => {
  const clickHandler = () => {
    props.onTryAgainClick();
  };

  return (
    <Card>
      <h2 className='login-failed'>Login failed</h2> <button onClick={clickHandler}>Try Again</button>
    </Card>
  );
};

export default LoginFailed;
