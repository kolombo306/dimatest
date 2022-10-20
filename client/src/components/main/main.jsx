import React, { useState } from 'react';

function Main() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/users`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Service Response Error');
      })
      .then((data) => setUsers(data))
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <button onClick={getUsers}>GET USERS</button>
      <ul>
        {users.map((el) => (
          <li key={Math.random().toFixed(5)}>{el.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Main;
