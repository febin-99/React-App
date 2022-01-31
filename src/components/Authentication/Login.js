import Card from "../UI/Card";
import LoginForm from "./LoginForm";
import { useState } from "react";
import LoginFailed from "./LoginFailed";

const CREDENTIAL = { username: "Febin", password: "1234" };
const Login = (props) => {
  const loginStatus = (loggedIn) => {
    if (loggedIn) {
      props.onLogIn(true);
    } else setContent(tryAgain);
  };

  const tryAgainClickHandler = () => {
    setContent(form);
  };
  const form = <LoginForm cred={CREDENTIAL} status={loginStatus} />;
  const tryAgain = <LoginFailed onTryAgainClick={tryAgainClickHandler} />;
  const [content, setContent] = useState(form);

  return <Card>{content}</Card>;
};
export default Login;
