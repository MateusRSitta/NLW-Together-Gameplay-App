import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import { Container, Gradient, GoBackButton, Title } from './styles';

import { theme } from '../../global/styles/theme';

type THeaderProps = {
    title: string;
    action?: ReactNode;
    modalVisible?: boolean;
}

const Header: React.FC<THeaderProps> = ({ title, action, modalVisible }) => {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    const { secondary80, secondary40, heading } = theme.colors;

    return (
        <Container
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.3,
                shadowRadius: 10,
                elevation: modalVisible ? 0 : 22
            }}
        >
            <Gradient
                colors={[secondary80, secondary40]}
            >
                <GoBackButton
                    onPress={goBack}
                >
                    <Feather
                        name='arrow-left'
                        size={24}
                        color={heading}
                    />
                </GoBackButton>

                <Title>
                    {title}
                </Title>

                {
                    action ?
                    <View>
                        {action}
                    </View>
                    :
                    <View style={{ width: 24 }} />
                }
            </Gradient>
        </Container>
    )
}

export default Header;
