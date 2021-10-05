import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const Illustration = styled.Image`
    width: 100%;
    height: 360px;
`;

export const Content = styled.View`
    margin-top: -40px;
    padding: 0 50px;
`;

export const Title = styled.Text`
    color: ${theme.colors.heading};
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    line-height: 40px;
    font-family: ${theme.fonts.title700};

    margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
    color: ${theme.colors.heading};
    font-size: 15px;
    text-align: center;
    line-height: 25px;
    font-family: ${theme.fonts.title500};
    
    margin-bottom: 10px;
`;
