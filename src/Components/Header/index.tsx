import React from 'react';

import { Container, LeftSide, RightSide} from './styles'

import Logo from '../../assets/LogoDevel.svg';
import { FiPower } from 'react-icons/fi';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => {


  return(
    <Container>
      <LeftSide>
        <img src={Logo} alt="logo" />
        <p>Agility in Solutions</p>
      </LeftSide>
      <RightSide>
      <button type="button" onClick={openModal}>
        <FiPower />
      </button>
      </RightSide>
    </Container>
  )
}

export default Header;
