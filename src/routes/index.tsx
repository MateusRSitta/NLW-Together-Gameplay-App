import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import AppRoutes from './app.routes';
import SignIn from '../screens/SignIn';

import { theme } from '../global/styles/theme';

const Routes: React.FC = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer theme={{ colors: { background: theme.colors.secondary100 } }}>
            { user.id ? <AppRoutes /> : <SignIn /> }
        </NavigationContainer>
    )
}

export default Routes;
