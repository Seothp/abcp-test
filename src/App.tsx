import React from "react";
import { UserInfo } from "./components/UserInfo";
import { Button } from "./components/Button";
import { useRandomUser } from "./useRandomUser";

import "./App.css";

function App() {
  const { receiveRandomUser, user } = useRandomUser();

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={receiveRandomUser} />
      <UserInfo user={user} />
    </div>
  );
}

export default App;
