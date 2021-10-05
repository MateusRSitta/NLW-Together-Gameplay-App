import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, IconWrapper, IconImg, Title } from './styles';

import DiscordImg from '../../assets/discord.png';

type TButtonIconProps = RectButtonProps & {
    title: string;
}

const ButtonIcon: React.FC<TButtonIconProps> = ({ title, ...rest }) => {
    return (
        <Container {...rest} >
            <IconWrapper>
                <IconImg source={DiscordImg} />
            </IconWrapper>

            <Title>
                {title}
            </Title>
        </Container>
    )
}

export default ButtonIcon;
