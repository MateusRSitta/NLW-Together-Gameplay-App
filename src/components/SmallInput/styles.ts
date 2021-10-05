import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TInputValidation = {
    isInvalid: boolean;
}

export const InputValidation = styled.TextInput<TInputValidation>`
    height: 48px;
    width: 48px;

    background: ${theme.colors.secondary40};
    border: 1px solid ${props => props.isInvalid ? theme.colors.primary : theme.colors.secondary50};
    border-radius: 8px;

    color: ${theme.colors.heading};
    font-family: ${theme.fonts.text400};
    font-size: 13px;
    text-align: center;

    margin-right: 4px;
`;
