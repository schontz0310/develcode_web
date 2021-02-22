import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import {FiCalendar, FiPlus, FiUser} from 'react-icons/fi'
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import DropZone from '../DropZone'


interface ICreateUser{
  users_name: string;
  users_date_of_birth: string;
  users_avatar: File;
}


interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddUser: (user: FormData) => void;
}

const ModalAdmin: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddUser
}) => {
  
  const formRef = useRef<FormHandles>(null);
  const [selectedFile, setSelectedFile] = useState<File>();

  
  const handleSubmit = useCallback(
    async (data: ICreateUser) => {
      const newUser = new FormData();
      newUser.append('users_name', data.users_name);
      newUser.append('users_date_of_birth', data.users_date_of_birth);
      newUser.append('users_avatar', selectedFile as File)
      handleAddUser(newUser)
      setIsOpen();
      return;
    },
    [handleAddUser, selectedFile, setIsOpen],
  );

  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastrar novo usuario</h1>
        
        <DropZone  onFileUpload={setSelectedFile} />
        <Input icon={FiUser} name="users_name" placeholder="Nome Completo" />
        <Input
          icon={FiCalendar}
          type="date"
          name="users_date_of_birth"

        />
        <button type="submit" >
          <p className="text">Cadastrar</p>
          <div className="icon">
            <FiPlus size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAdmin;
