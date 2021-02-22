import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 400px) {
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  top: 0px;
  height: 6rem;
  padding-right: 5rem;
  background-color: #3e3b47;
  @media(max-width: 400px) {
    padding: 0;
    justify-content: space-between;
    img{
      margin-left:2%;
    }
    p{
      display:none;
    }
  }

`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  right: 2rem;
  height: 6rem;
  button {
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
    &:hover {
      color: ${shade(0.1, '#fff')};
    }
  }
  @media(max-width: 800px) {
    width: 20%;
  }


  @media(max-width: 400px) {
    right: 0;
    width: 30%;
    img{
      margin-left:2%;
    }
    p{
      display:none;
    }
    a{
      width:auto;
      margin: 25%;
    }
    svg{
      margin: auto;
      left: 10%;
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
  @media(max-width: 400px) {
    width:40%;
    img{
      margin-left:2%;
    }
    p{
      display:none;
    }
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
  align-items: center;
`

export const UsersContainerTitle = styled.div`
  display: flex;  
  color: #000;
  width: 90%;
  margin-bottom: 2rem;
  align-self: center;
  justify-content: space-between;

  h1{
    margin-left: 5%;
  }
  
  span {
    display: flex;
    flex-direction: row;
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
      display: flex;
      color: #000;
      width: 8rem;
    }

    
  }

  @media(max-width: 800px) {     
      h3{
        max-width: 4rem;
      }
      span{
        align-items: center;
        justify-content: space-between;
        h3{
          margin-left: -10%;
          margin-right: -10%;
          font-size: 1rem;
          width: 3rem;
        }
      }
    }
@media(max-width: 400px) {
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3{
    max-width: 4rem;
  }
  h1{
    font-size: 1.2rem;
    margin-bottom: 5%;
  }
  span{
    align-items: center;
    justify-content: space-between;
    h3{
      margin-left: -10%;
      margin-right: -10%;
      font-size: 1rem;
      width: 3rem;
    }
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
    margin-top: 0.5rem;
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
      margin: 10%;
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
      margin-left: 5%;
      color: #fff;
      font-size: 20px;
      width:20%;
    }
  }

  @media(max-width: 800px) {
    div{
      img{
        width: 4rem;
      height: 4rem;
      }
      strong{
        font-size: 1rem;
        margin-left: 4%;
      }
      span{
        button{
          margin: 10%;
          width: auto;
        }
        svg{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  @media(max-width: 400px) {
    width: 95%;
    div{
      img{
        display: none;
        width: 2rem;
        height: 2rem;
      }
      strong{
        font-size: 1rem;
        margin-left: 4%;
      }
      span{
        margin-left: auto;
        margin-right: 5%;
        button{
          margin: 10%;
          width: auto;

        }
        svg{
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;

