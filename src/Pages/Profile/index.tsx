import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiCalendar, FiCamera, FiUser } from 'react-icons/fi';
import {Link, useHistory, useLocation, } from 'react-router-dom' 
import {format, parseISO } from 'date-fns';

import api from '../../services/api';

import Input from '../../Components/Input';
import Loading from '../../Components/LoadingAnimation';
import { AvatarInput, Container, Content } from './styles';

interface IUser{
  users_id: string;
  users_name: string;
  users_date_of_birth: string;
  users_avatar: string;
}

interface ProfileForData {
  users_name: string;
  users_date_of_birth: string;
}

const Profile: React.FC = () =>{
  const location = useLocation<IUser>();
  const [done, setDone] = useState<Boolean>(true);
  const [user, setUser] = useState<IUser>();

  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  useEffect(()=>{
    const updateUser = {
      users_id: location.state.users_id,
      users_name: location.state.users_name,
      users_date_of_birth: location.state.users_date_of_birth,
      users_avatar: location.state.users_avatar,
    }
    setUser(updateUser)
    console.log(updateUser)
    if(formRef.current){
      formRef.current.setData({ users_date_of_birth: format(parseISO(updateUser.users_date_of_birth), 'yyyy-MM-dd') });
    }

  },[location.state.users_avatar, 
      location.state.users_date_of_birth, 
      location.state.users_id, 
      location.state.users_name
    ]
  )

  const handleLoadDetail = useCallback(() => {
    setDone(false);
  }, []);

  const handleAvatarChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDone(false);
      const data = new FormData();
      if (event.target.files) {
        data.append('users_avatar', event.target.files[0]);
        api.patch(`/users/avatar/${user?.users_id}`, data).then(response => {
          setUser(response.data)
        });
        setDone(true);
      }
    },
    [user?.users_id],
  );

  const handleSubmit = useCallback(
    async (data: ProfileForData) => {
      try {
        const {
          users_name,
          users_date_of_birth,
        } = data;
        const formData = {
          users_name,
          users_date_of_birth,
        };
        const response = await api.put(`/users/${user?.users_id}`, formData);
        setUser(response.data)
        history.push('/dashboard')
        alert('Usuario atualizado com sucesso')
      } catch (err) {
      }
    },
    [history, user?.users_id],
  );

  return(
    <Container>
    <header>
      <Link to="/dashboard">
        <FiArrowLeft />
      </Link>
    </header>
    <Content>
      <Form
        ref={formRef}
        initialData={{
          users_name: user?.users_name,
          users_date_of_birth: user?.users_date_of_birth ? format(parseISO(user.users_date_of_birth), 'dd-MM-yyyy'): new Date()}}
        onSubmit={handleSubmit}

      >
        <AvatarInput>
          {!done ? (
            <Loading height={186} width={186} />
          ) : (
            <img src={user?.users_avatar} alt={user?.users_name} loading="eager" />
          )}

          <label htmlFor="avatar">
            <FiCamera />
            <input
              type="file"
              id="avatar"
              onClick={handleLoadDetail}
              onChange={handleAvatarChange}
            />
          </label>
        </AvatarInput>
        <h1>Perfil do usuario</h1>

        <Input name="users_name" icon={FiUser} placeholder="Nome" />
        <Input
          icon={FiCalendar}
          type="date"
          name="users_date_of_birth"

        />
        <button type="submit">Confirmar mudanças</button>
      </Form>
    </Content>
  </Container>
  )
}

export default Profile;