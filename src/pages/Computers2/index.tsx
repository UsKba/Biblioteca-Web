import React, { useState } from 'react';

// import { Container } from './styles';

const Computers2: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('username', username);
    console.log('email', email);
    console.log('password', password);
  }

  return (
    <div>
      <form onSubmit={(eventForm) => handleSubmit(eventForm)}>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            console.log('value', event.target.value);
            setUsername(event.target.value);
          }}
        />

        <input
          type="text"
          value={email}
          onChange={(event) => {
            console.log('value', event.target.value);
            setEmail(event.target.value);
          }}
        />

        <input
          type="text"
          value={password}
          onChange={(event) => {
            console.log('value', event.target.value);
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Passa Zap</button>
      </form>
    </div>
  );
};

export default Computers2;
