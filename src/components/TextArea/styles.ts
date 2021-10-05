import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TContainerProps = {
    isInvalid: boolean;
}

export const Container = styled.TextInput<TContainerProps>`
    width: 100%;
    height: 95px;

    background: ${theme.colors.secondary40};
    border: 1px solid ${props => props.isInvalid ? theme.colors.primary : theme.colors.secondary50};
    border-radius: 8px;

    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text400};
    font-size: 13px;

    padding: 16px;

    margin-right: 4px;
`;
