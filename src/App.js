import Login from "./components/Authentication/Login";
import ExpenseTracker from "./components/Expenses/ExpenseTracker";
import { useState } from "react";

function App() {
  const [logStatus, setLogStatus] = useState(false);
  const logInHandler = (status) => {
    setLogStatus(status);
  };
  const logOutHandler = () => {
    setLogStatus(false);
  };
  let login = <Login onLogIn={logInHandler} onLogOut={logOutHandler} />;
  let tracker = <ExpenseTracker onLogOut={logOutHandler} />;
  return <div>{logStatus ? tracker : login}</div>;
}

export default App;
