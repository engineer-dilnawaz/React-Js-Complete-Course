import { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  function addNewUserHandler(newUser) {
    setUserList((prev) => [...prev, newUser]);
  }

  return (
    <div>
      <AddUser onSubmit={addNewUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
