import styled from 'styled-components';
import { darken } from 'polished';

import waveLogo from '~/assets/waves.svg';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${waveLogo}) no-repeat right center;
  background-size: cover;
`;

export const Content = styled.div`
  margin-bottom: 100px;
  background: #2f4a82;
  width: 100%;
  max-width: 315px;
  text-align: center;
  padding: 20px;

  img {
    background: #2f4a82;
    width: 120px;
    height: 150px;
  }
  form {
    background: #2f4a82;
    display: flex;
    flex-direction: column;
    padding: 20px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #ccc;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #2f4a82;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 15px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#2F4A82')};
      }
    }

    a {
      background: #2f4a82;
      color: #fff;
      font-weight: bold;
      margin-top: 15px;
      font-size: 15px;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
