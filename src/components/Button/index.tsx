import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

type TButtonProps = RectButtonProps & {
    title: string;
}

const Button: React.FC<TButtonProps> = ({ title, ...rest }) => {
    return (
        <Container {...rest} >
            <Title>
                {title}
            </Title>
        </Container>
    )
}

export default Button;
