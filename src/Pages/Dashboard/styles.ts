import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  top: 0px;
  height: 6rem;
  padding-right: 5rem;
  background-color: #3e3b47;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  background: transparent;
  align-items: center;
  justify-content: center;
  right: 2rem;
  height: 6rem;
  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }
  a{  
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    text-decoration: none;  
  }
  svg {
    color: #fff;
    width: 2rem;
    height: 2rem;
    margin-left: 6rem;
    &:hover {
      color: ${shade(0.1, '#fff')};
    }
  }
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  width: 13rem;
  align-items: center;
  justify-content: center;
  img{
    margin-left: 1rem;
    width: 30%;
    filter: invert(0) brightness(500) contrast(200);
  }
  p{
    color: #fff;
    font-family: 'Roboto';
    font-size: 1.2rem;
    margin-left: 1.2rem;
  }
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  width: 90vw;
  height: 80vh;
  border-radius: 1rem;
  background: transparent;
  justify-content: center;
  align-items: center;
`

export const UsersContainerTitle = styled.div`
  display: flex;  
  color: #000;
  width: 90vw;
  margin-bottom: 2rem;
  align-self: center;
  justify-content: space-between;

  h1{
    margin-left: 15rem;
  }
  span {
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    margin-right: 10%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #f4ede8;
    width: auto;
    button{
      background: transparent;
      border: none;
      svg {
      color: #000;
      margin-right: 3rem;
      margin-left: 3rem;
      width: auto;
      height: 2rem;
      &:hover{
        color: #77ee00;
      }
    }
    }
    h3{
      color: #000;
    }

    
  }
`



const selectedBorder = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -0.3rem;
  }
`;


export const Appointment = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  opacity: 85%;

  & + div {
    margin-top: 16px;
  }
  span {
    margin-left: 5%;
    margin-right: 10%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #f4ede8;
    width: auto;
    button{
      background: transparent;
      border: none;
      svg {
      color: #fff;
      margin-right: 0px;
      width: 2rem;
      height: 2rem;
      &:hover {
      color: ${shade(0.2, '#fff')};
    }
    }
    }

    
  }

  span + span{
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    width: 10%;
    margin-right: 1rem;
    margin-left: auto;
  }

  div {
    flex: 1;
    margin-left: 24px;
    padding: 16px 24px;
    background: #3e3b47;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 10px;

    &:hover::before {
      position: absolute;
      height: 100%;
      width: 3rem;
      border-radius: 0.8rem;
      z-index: -1;
      content: '';
      animation-name: ${selectedBorder};
      animation-duration: 300ms;
      animation-fill-mode: forwards;
      background: ${shade(0.5, '#77ee00')};
      
    }

    

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;