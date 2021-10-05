import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const ScrollPage = styled.ScrollView.attrs({
    overScrollMode: 'never',
    showsVerticalScrollIndicator: false
})``;

export const Label = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
`;

export const Form = styled.View`
    padding: 0 24px;
    margin-top: 30px;
`;

export const Field = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;

    margin-top: 30px;
`;

export const Column = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Divider = styled.Text`
    margin-right: 4px;

    font-size: 15px;
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.highlight};
`;

export const Span = styled.Text`
    font-family: ${theme.fonts.text400};
    font-size: 13px;
    color: ${theme.colors.highlight};
`;

export const Footer = styled.View`
    margin-top: 20px;
    margin-bottom: 56px;
`;
