import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

export const Container = styled(RectButton)`
    width: 100%;
    height: 56px;

    background: ${theme.colors.primary};
    border-radius: 8px;

    flex-direction: row;
    align-items: center;
`;

export const IconWrapper = styled.View`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    border-right-width: 1px;
    border-color: ${theme.colors.line};
`;

export const IconImg = styled.Image``;

export const Title = styled.Text`
    flex: 1;
    
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text500};
    font-size: 15px;
    text-align: center;
`;
