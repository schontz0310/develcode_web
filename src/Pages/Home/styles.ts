import styled from 'styled-components';
import logo from '../../assets/LogoDevel.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: transparent url(${logo}) no-repeat 4rem 4rem;
  background-size: 12rem; 
  align-items: center;
  justify-content: center;
  
`;

export const Content = styled.header`

  display: flex;
  flex-direction: column;
  max-width: 48rem;
  justify-content: center;
  align-items: center;

  a{
    width: 75%;
  }

`

export const Title = styled.h1`
  display: flex;
  font-size: 3rem;
  color: #3a3a3a;
`;