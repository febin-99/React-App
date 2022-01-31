import Card from "../UI/Card";

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
        <label>Username</label>
        <input type="text" onChange={usernameHandler} />
        <label>Password</label>
        <input type="password" onChange={passwordHandler} />
        <button type="submit">Log In</button>
      </form>
    </Card>
  );
};

export default LoginForm;
