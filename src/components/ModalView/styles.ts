import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Modal = styled.Modal``;

export const Container = styled.View`
    width: 100%;
    bottom: 0;

    position: absolute;
    z-index: 5;
`;

export const Bar = styled.View`
    width: 39px;
    height: 2px;

    border-radius: 2px;
    background: ${theme.colors.secondary30};

    align-self: center;

    margin-top: 13px;
`;
