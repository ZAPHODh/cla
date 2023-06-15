import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 35px;
  border-radius: 35px;
  overflow: hidden;
  position: relative;
  @media (max-width:728px) {
    width: 200px;
    font-size: 8px;
    }
  `}
`;

export const Input = styled.input`
  ${() => css`
  width: 100%;
  height: 100%;
  border-radius: 35px 0 0 35px;
  border: solid 1px darkgray;
  padding-left:25px;
  padding-right:50px;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  &:hover{
    border-color:rgb(46, 179, 250);
  }
  &:focus{
    outline: none;
  }
  &::placeholder{
    opacity: 0.5;

  }
  `}
`;

export const Button = styled.button`
${() => css`
  height: 100%;
  width: 80px;
  background-color: rgb(100, 198, 251);
  border: none;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  &:hover{
    cursor: pointer;
    background-color: rgb(46, 179, 250);
  }
`}
`;
