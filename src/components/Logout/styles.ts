import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.View`
    flex-direction: row;
    align-items: center;

    margin-bottom: 22px;
`;

export const Text = styled.Text`
    font-family: ${theme.fonts.title500};
    color: ${theme.colors.highlight};
    font-size: 24px;
`;

export const TextBoldWhite = styled.Text`
    font-family: ${theme.fonts.title700};
    font-size: 24px;
    color: ${theme.colors.heading};
`;

export const TextBoldPrimary = styled.Text`
    font-family: ${theme.fonts.title700};
    font-size: 24px;
    color: ${theme.colors.primary};
`;

export const OptionsButtons = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const CancelButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    height: 56px;
    width: 160px;

    border: 1px solid ${theme.colors.secondary30};
    border-radius: 8px;

    align-items: center;
    justify-content: center;

    margin-right: 8px;
`;

export const ButtonText = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.heading};
    font-size: 15px;
`;

export const LogOutButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    height: 56px;
    width: 160px;

    border-radius: 8px;
    background: ${theme.colors.primary};

    align-items: center;
    justify-content: center;
`;
