import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';

import { Container, Text, User, Greeting, Username, Message } from './styles';

import Avatar from '../Avatar';

type TProfileProps = {
    openModal: () => void;
}

const Profile: React.FC<TProfileProps> = ({ openModal }) => {
    const { user } = useAuth();

    return (
        <Container>
            <RectButton onPress={openModal}>
                <Avatar urlImage={user.avatar} />
            </RectButton>

            <Text>
                <User>
                    <Greeting>Olá,</Greeting>
                    <Username>{user.firstName}</Username>
                </User>
                <Message>Bora tomar uma</Message>
            </Text>
        </Container>
    )
}

export default Profile;
