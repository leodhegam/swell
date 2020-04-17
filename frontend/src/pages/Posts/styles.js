import styled from 'styled-components';

export const Container = styled.div`
  
  margin: 0 auto;
  padding: 60px 30px;
  margin-top: 3px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #40565e;
  justify-content: right;
  align-items: flex-start;

  main {
    margin-left: 30px;
    flex: 1;
    li {
      background: #fff;
      box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      padding: 20px;

      header {
        display: flex;
        flex-direction: row;
        align-items: center;
        div {
          margin-left: 10px;
          strong {
            display: block;
            font-size: 16px;
            color: #333;
          }
          span {
            text-transform: uppercase;
            font-size: 13px;
            color: #999;
            margin-top: 2px;
          }
        }
        img {
          width: 54px;
          height: 54px;
          border-radius: 50%;
        }
      }
      p {
        color: #666;
        font-size: 14px;
        line-height: 20px;
        margin: 10px 0;
      }
    }
  }

  main ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    list-style: none;
  }
  @media (max-width: 650px) {
    main ul {
      grid-template-columns: 1fr;
    }
  }
`;
// export const Content = styled.aside`
//   textarea {
//     resize: none;
//     padding: 10px;
//     line-height: 1.5;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//     box-shadow: 1px 1px 1px #999;
//   }

//   strong {
//     color: #fff;
//     display: block;
//     margin-bottom: 10px;
//   }
//   button {
//     display: block;
//     border: 1px solid #3498db;
//     background: none;
//     padding: 7px 12px;
//     font-size: 14px;
//     margin: 10px;
//     color: #fff;
//     transition: 0.5s;
//     position: relative;
//     overflow: hidden;
//     &:hover {
//       opacity: 0.7;
//     }
//   }
// `;
