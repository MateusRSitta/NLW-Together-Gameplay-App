import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;

    padding-right: 24px;
`;

export const GuildIconContainer = styled(LinearGradient).attrs({
    colors: [theme.colors.secondary50, theme.colors.secondary70],
})`
    height: 68px;
    width: 64px;

    border-radius: 8px;
    
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    flex: 1;

    margin-left: 20px;
`;

export const Header = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 12px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export const Category = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
`;

export const Footer = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DateInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Date = styled.Text`
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.heading};
    font-size: 13px;

    margin-left: 8px;
`;

export const PlayersInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Player = styled.Text`
    font-family: ${theme.fonts.text500};
    font-size: 13px;

    margin-left: 8px;
`;
