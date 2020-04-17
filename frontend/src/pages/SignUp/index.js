import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/wav.png';
// import { Container } from './styles';
import { signUpRequest } from '~/store/modules/auth/actions';
import { Container } from '~/components/Header/styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  age: Yup.number().min(0).max(100).required('A idade é obrigatória'),
  city: Yup.string().required('A cidade é obrigatória'),
  uf: Yup.string()
    .min(2, 'Informe apenas a sigla do estado')
    .max(2, 'Informe apenas a sigla do estado')
    .required('O estado é obrigatório'),
});
export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password, age, city, uf }) {
    dispatch(signUpRequest(name, email, password, age, city, uf));
  }
  return (
    <>
      <Container>
        <img src={logo} alt="Swell" />
        <Form schema={schema} onSubmit={handleSubmit}>
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
      </Container>
    </>
  );
}
