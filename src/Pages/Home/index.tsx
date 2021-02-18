import React from 'react';

import {Container, Content} from './styles'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom';

const Home: React.FC = () =>{
  return(
    <Container>
      <Content>
        <h1>Desafio - Cadastro de clientes</h1>
        <Link to={"/dashboard"} >
        <Button>
          Acessar
        </Button>
        </Link>
      </Content>
    </Container>
  )
}

export default Home;