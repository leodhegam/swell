import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Container, Content } from './styles';

export default function Dashboard() {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    api.get('posts').then((response) => {
      setPost(response.data);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('posts', {
      title,
      content,
    });

    setTitle('');
    setContent('');

    setPost([...post, response.data]);
  }
  return (
    <>
      <Container>
        <Content>
          <strong>Publique algo</strong>
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              cols="36"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título"
            />
            <input
              rows="3"
              cols="36"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Digite algo"
            />
            <button type="submit">Publicar</button>
          </form>
        </Content>
        <main>
          <ul>
            {post.map((posts) => (
              <li key={posts.id}>
                <header>
                  <img
                    src={
                      (posts.user.avatar && posts.user.avatar.url) ||
                      `https://api.adorable.io/avatars/50/abott@adorable.png`
                    }
                    alt=""
                  />
                  <div>
                    <strong>{posts.user.name} </strong>
                    {/* <span>{posts.createdAt}</span> */}
                    <span>{posts.title}</span>
                    <p>{posts.content}</p>
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
