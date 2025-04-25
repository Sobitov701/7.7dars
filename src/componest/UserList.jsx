import React from "react";
import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default UserList;
