import './App.css';
import Main from './components/main/main';
import Form from './components/form/form';
import React, { useState } from 'react';
import { Context } from './context';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <Context.Provider value={[users, setUsers]}>
      <Main></Main>
      <Form></Form>
    </Context.Provider>
  );
}

export default App;
