import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Container } from './styles';

export default function Dashboard() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    api.get('users').then((response) => {
      setUser(response.data);
    });
  }, []);
  return (
    <>
      <Container>
        <main>
          <ul>
            {user.map((users) => (
              <li key={user.id}>
                <header>
                  <img
                    src={
                      (users.avatar && users.avatar.url) ||
                      `https://api.adorable.io/avatars/50/abott@adorable.png`
                    }
                    alt=""
                  />
                  <div>
                    <strong>{users.name}</strong>
                    <span>
                      {users.uf} / {users.city} | {users.age} anos
                    </span>
                    <span>{users.bio}</span>
                  </div>
                </header>
              </li>
            ))}
          </ul>
        </main>
      </Container>
    </>
  );
}
