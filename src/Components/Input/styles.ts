import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #4ECB79;
      border-color: #4ECB79;
      input{
        background: #000;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #4ECB79;
    `}

  input{
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #b7b7cc;
    }

    ${props =>
    props.isFilled &&
    css`
      color: #000;
    `}    
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover{
  -webkit-text-fill-color: #000;
  box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
    marker: none;
  }



  input[type=date] {
    color: #b7b7cc;
  
    ${props =>
    props.isFilled &&
    css`
      color: #000;
    `} 

  &::-webkit-datetime-edit-month-field {
    color: #b7b7cc;
    ${props =>
    props.isFilled &&
    css`
      color: #000;
    `}

  }
  &::-webkit-datetime-edit-day-field {
    color: #b7b7cc;
    ${props =>
    props.isFilled &&
    css`
      color: #000;
    `}
  }
  &::-webkit-datetime-edit-year-field {
    color: #b7b7cc;
    ${props =>
    props.isFilled &&
    css`
      color: #000;
    `}
  }
  

  &::-webkit-calendar-picker-indicator {
    display: none;
  }  
  }

  svg {
    margin-right: 1rem;
  }
`;
