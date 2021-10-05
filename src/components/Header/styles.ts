import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    width: 100%;
    height: 100px;

    position: absolute;
    top: 0;
    z-index: 2;

    background: #000000;
`;

export const Gradient = styled(LinearGradient)`
    flex: 1;

    padding: ${getStatusBarHeight()}px 24px 0 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const GoBackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
    flex: 1;

    text-align: center;
    font-family: ${theme.fonts.title700};
    font-size: 20px;
    color: ${theme.colors.heading};
`;
