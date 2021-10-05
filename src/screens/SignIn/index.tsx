import React from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container, Illustration, Content, Title, SubTitle } from './styles';

import Background from '../../components/Background';
import ButtonIcon from '../../components/ButtonIcon';

import { theme } from '../../global/styles/theme';

import IllustrationImg from '../../assets/illustration.png';

const SignIn: React.FC = () => {
    const { loading, signIn } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch(error) {
            Alert.alert(error);
        }
    }

    return (
        <Background>
            <Container>
                <Illustration resizeMode='stretch' source={IllustrationImg} />

                <Content>
                    <Title>
                        Conecte-se {'\n'}
                        e organize suas jogatinas
                    </Title>
                    <SubTitle>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos {'\n'}
                    </SubTitle>

                    {
                        loading ? <ActivityIndicator color={theme.colors.primary} /> :
                        <ButtonIcon
                            title='Entrar com Discord'
                            onPress={handleSignIn}
                        />
                    }
                </Content>
            </Container>
        </Background>
    )
}

export default SignIn;
