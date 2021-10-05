import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    
    margin-top: ${getStatusBarHeight() + 26}px;
    margin-bottom: 40px;
`;
