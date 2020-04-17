import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Container,Content } from './styles';

export default function Dashboard() {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    api.get('users').then((response) => {
      setUser(response.data);
    });
  }, []);
  useEffect(() => {
    api.get('posts').then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <>
      <Container>
        <Content>
        <strong>
          Publique algo
        </strong>
        <textarea rows="4" cols="40" placeholder="Digite algo"></textarea>
        <button type="submit">Publicar</button>
        </Content>
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
                {/* TODO */}
                </header>
              </li>
            ))}
          </ul>
        </main>
      </Container>
    </>
  );
}
