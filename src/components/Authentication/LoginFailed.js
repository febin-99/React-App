import Card from "../UI/Card";

const LoginFailed = (props) => {
  const clickHandler = () => {
    props.onTryAgainClick();
  };

  return (
    <Card>
      <h2>Login failed</h2> <button onClick={clickHandler}>Try Again</button>
    </Card>
  );
};

export default LoginFailed;
