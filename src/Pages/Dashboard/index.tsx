import React, { useState } from 'react';
import api from '../../services/api'

import {format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import blankAvatar from '../../assets/blankAvatar.png';
import { FiArrowLeft, FiTrash2, FiUserPlus, FiEdit2, FiArrowRight } from 'react-icons/fi';
import { 
  Appointment,
  Container, 
  Header, 
  LeftSide, 
  RightSide,  
  UsersContainer, 
  UsersContainerTitle 
} from './styles';

import Logo from '../../assets/LogoDevel.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface IUser{
  users_id: string;
  users_name: string;
  users_date_of_birth: string;
  users_avatar: string;
}


const Dashboard: React.FC = () =>{
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<IUser[]>([])

  async function loadUsers() {
    const response = await api.get('/users');
    setUsers(response.data);
  }

  async function handleDeleteUser(id: string) {
    try {
      await api.delete(`/profile/${id}`);
      setUsers(users.filter(user=>user.users_id !== id));   
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente');
    }
  }
  
  useEffect(() => {
    loadUsers();
  }, []);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return(
    <Container>
      <Header >
        <LeftSide>
          <img src={Logo} alt="logo" />
          <p>Develcode Challenge</p>
        </LeftSide>
        <RightSide>
          <button type="button" onClick={toggleModal}>
            <FiUserPlus />
          </button>
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </RightSide>
      </Header>
      <UsersContainer>
        <UsersContainerTitle>
          <h1>Usuários</h1>
          <span>
            <button onClick={()=>console.log('pagina')} type="button">
              <FiArrowLeft />
            </button>
            <h3>{`Pagina 1 de 5`}</h3>  
            <button onClick={()=>console.log('pagina')} type="button">
              <FiArrowRight />
            </button>
          </span>
        </UsersContainerTitle>
              {users.map(user =>(
                <Appointment key={user.users_id}>
                
                  <div>
                    <img
                      src={
                        user.users_avatar !== null
                          ? user.users_avatar
                          : blankAvatar
                      }
                      alt={user.users_name}
                    />
                    <strong>{user.users_name}</strong>
                    <span>
                      {format(parseISO(user.users_date_of_birth), " dd '/' MM '/' Y", {
                        locale: ptBR,
                      })}
                    </span>
                    <span>
                      <button onClick={() => handleDeleteUser(user.users_id)} type="button">
                          <FiEdit2 />
                      </button>
                      <button onClick={() => handleDeleteUser(user.users_id)} type="button">
                          <FiTrash2 />
                      </button>
                    </span>
                  </div>
                </Appointment>
              ))}
              <footer>
              
              </footer>
      </UsersContainer>


    </Container>
  )
}

export default Dashboard;   