import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
`;

export const Content = styled.View`
    margin-left: 20px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;

    margin-bottom: 4px;
`;

export const Status = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const NameStatus = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
`;

export const BulletStatus = styled.View`
    height: 8px;
    width: 8px;

    border-radius: 4px;

    margin-right: 8px;
`;
