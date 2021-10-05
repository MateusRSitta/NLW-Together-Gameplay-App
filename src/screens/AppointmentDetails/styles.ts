import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';

export const Banner = styled.ImageBackground`
    width: 100%;
    height: 234px;
    
    flex-direction: column;
    align-items: baseline;
    justify-content: flex-end;
    padding: 24px;

    margin-top: 100px;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};

    margin-bottom: 12px;
`;

export const Subtitle = styled.Text`
    font-size: 13px;
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.heading};
    line-height: 20px;

    width: 80%;
`;

export const Footer = styled.View`
    position: absolute;
    z-index: 4;
    left: 24px;
    right: 24px;
    bottom: ${Platform.OS === 'ios' ? getBottomSpace() : 24}px;
`;
