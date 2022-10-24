import React, { useContext, useState } from 'react';
import './form.module.css';
import { Context } from '../../context';

function Form() {
  const [, setUsers] = useContext(Context);
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Имя:
        <input
          type="text"
          name="name"
          id="email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Создать пользователя" />
    </form>
  );
}

export default Form;
