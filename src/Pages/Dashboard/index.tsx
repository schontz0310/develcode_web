import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';
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
import ModalAddUser from '../../Components/ModalAddUser'

interface IUser{
  users_id: string;
  users_name: string;
  users_date_of_birth: string;
  users_avatar: string;
}

const Dashboard: React.FC = () =>{
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<IUser[]>([])
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const history = useHistory();

  async function loadUsers() {
    const response = await api.get(`/users?page=${page}`);
    setUsers(response.data);
    const totalPages = Math.ceil((response.headers['x-total-count']) / 5); 
    setNumberOfPages(totalPages);
  }

  async function handlePlusPage() {
    setPage(page + 1)
    const response = await api.get(`/users?page=${page + 1}`);
    setUsers(response.data);
    const totalPages = Math.ceil((response.headers['x-total-count']) / 5); 
    setNumberOfPages(totalPages);
  }
  async function handleMinusPage() {
    setPage(page - 1)
    const response = await api.get(`/users?page=${page - 1}`);
    setUsers(response.data);
    const totalPages = Math.ceil((response.headers['x-total-count']) / 5); 
    setNumberOfPages(totalPages);
  }

  async function handleUpdateUser(user: {}) {
    console.log(user)
    try {
      history.push('/profile', user)
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente');
    }
  }
  
  async function handleDeleteUser(id: string) {
    try {
      await api.delete(`/profile/${id}`);
      setUsers(users.filter(user=>user.users_id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente');
    }
    loadUsers();
  }
  
  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  async function handleAddUser(
    user: FormData,
  ): Promise<void> {
    try {
      const response = await api.post('/users', user);

      setUsers([...users  , response.data]);
    } catch (err) {
      console.log(err);
    }
    loadUsers();
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
          <ModalAddUser 
            isOpen={modalOpen}
            setIsOpen={toggleModal}
            handleAddUser={handleAddUser}
            />
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </RightSide>
      </Header>
      <UsersContainer>
        <UsersContainerTitle>
          <h1>Usuários</h1>
          <span>
          {page > 1 ? (
              <button onClick={handleMinusPage} type="button">
                <FiArrowLeft />
              </button>
            ): (
              <button  type="button">
                <FiArrowLeft />
              </button>
            )}  
            <h3>{`Pagina ${page} de ${numberOfPages}`}</h3>
            {page < numberOfPages ? (
              <button onClick={handlePlusPage} type="button">
                <FiArrowRight />
              </button>
            ): (
              <button  type="button">
                <FiArrowRight />
              </button>
            )}  
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
                      <button onClick={(updateUser: {}) => handleUpdateUser({
                        users_id: user.users_id,
                        users_name: user.users_name,
                        users_date_of_birth: user.users_date_of_birth,
                        users_avatar: user.users_avatar,
                      })} type="button">
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