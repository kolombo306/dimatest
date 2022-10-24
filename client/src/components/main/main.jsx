import React, { useContext } from 'react';
import Button from '../button/button';
import styles from './main.module.css';
import { Context } from '../../context';

function Main() {
  const [users, setUsers] = useContext(Context);

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

  const deleteUser = (userToDelete) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userToDelete }),
    })
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
    <div className={styles.main}>
      <h4>Список пользователей{users.length ? ':' : ' пуст'}</h4>
      <ul>
        {users.map((el, index) => (
          <li key={index + el.name.toString()}>
            {el.name.toString()}
            <Button caption="X" func={() => deleteUser(el.name)}></Button>
          </li>
        ))}
      </ul>
      <Button caption="Получить данные" func={getUsers}></Button>
    </div>
  );
}

export default Main;
