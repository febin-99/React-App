import Card from "../UI/Card";
import './LoginForm.css';

const LoginForm = (props) => {
  const credentials = { username: "", password: "" };
  const usernameHandler = (event) => {
    credentials.username = event.target.value;
  };
  const passwordHandler = (event) => {
    credentials.password = event.target.value;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      credentials.username === props.cred.username &&
      credentials.password === props.cred.password
    ) {
      props.status(true);
    } else {
      props.status(false);
    }
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label className = 'field'>Username</label>
        <input className = 'field' type="text" onChange={usernameHandler} />
        <label className = 'field'>Password</label>
        <input className = 'field' type="password" onChange={passwordHandler} />
        <button type="submit">Log In</button>
      </form>
    </Card>
  );
};

export default LoginForm;
