import React from 'react';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Title,
  Text,
  TextBoldWhite,
  TextBoldPrimary,
  OptionsButtons,
  CancelButton,
  ButtonText,
  LogOutButton
} from './styles';

type TLogoutProps = {
  closeModal: () => void;
}

const Logout: React.FC<TLogoutProps> = ({ closeModal }) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>
        <Text>Deseja sair do </Text>
        <TextBoldWhite>Game</TextBoldWhite>
        <TextBoldPrimary>Play</TextBoldPrimary>
        <TextBoldWhite>?</TextBoldWhite>
      </Title>

      <OptionsButtons>
        <CancelButton onPress={closeModal}>
          <ButtonText>Não</ButtonText>
        </CancelButton>
        <LogOutButton onPress={signOut}>
          <ButtonText>Sim</ButtonText>
        </LogOutButton>
      </OptionsButtons>
    </Container>
  )
}

export default Logout;
