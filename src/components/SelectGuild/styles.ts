import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TContainerProps = {
    hasValidationError: boolean;
}

export const Container = styled.View<TContainerProps>`
    width: 100%;
    height: 68px;

    border: 1px solid ${props => props.hasValidationError ? theme.colors.primary : theme.colors.secondary50};
    border-radius: 8px;

    flex-direction: row;
    align-items: center;
    overflow: hidden;

    padding-right: 25px;
`;

export const Image = styled.View<TContainerProps>`
    height: 68px;
    width: 64px;

    border: 1px solid ${props => props.hasValidationError ? theme.colors.primary : theme.colors.secondary50};
    border-radius: 8px;
    background: ${theme.colors.secondary40};
`;

export const SelectBody = styled.View`
    flex: 1;
    align-items: center;
`;

export const Label = styled.Text`
    font-size: 18px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
`;
