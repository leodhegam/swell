import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/wav.png';
// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="Swell" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input
          name="age"
          type="number"
          min="0"
          max="100"
          placeholder="Sua idade"
        />
        <Input name="city" placeholder="Cidade" />
        <Input name="uf" placeholder="UF" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}
