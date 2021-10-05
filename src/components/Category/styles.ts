import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

export const Gradient = styled(LinearGradient)`
    width: 104px;
    height: 120px;

    justify-content: center;
    align-items: center;

    border-radius: 8px;

    margin-right: 8px;
`;

export const Content = styled(LinearGradient)`
    width: 100px;
    height: 116px;

    background: ${theme.colors.secondary40};
    border-radius: 8px;

    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 15px;
`;

export const CheckedCategory = styled.View`
    width: 10px;
    height: 10px;

    position: absolute;
    top: 8px;
    right: 8px;

    border-radius: 3px;
    background: ${theme.colors.primary};
`;

export const CheckCategory = styled.View`
    width: 12px;
    height: 12px;

    position: absolute;
    top: 8px;
    right: 8px;

    border: 2px solid ${theme.colors.secondary50};
    border-radius: 3px;
    background: ${theme.colors.secondary100};
`;
