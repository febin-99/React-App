import Login from "./components/Authentication/Login";
import ExpenseTracker from "./components/Expenses/ExpenseTracker";
import { useState } from "react";

function App() {
  const [logStatus, setLogStatus] = useState(false);
  const logInHandler = (status) => {
    setLogStatus(status);
  };
  let login = <Login onLogIn={logInHandler} />;
  let tracker = <ExpenseTracker />;
  return <div>{logStatus ? tracker : login}</div>;
}

export default App;
