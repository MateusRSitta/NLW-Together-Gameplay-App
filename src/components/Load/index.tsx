import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

import { theme } from '../../global/styles/theme';

const Load: React.FC = () => {
  return (
    <Container>
        <ActivityIndicator
            size='large'
            color={theme.colors.primary}
        />
    </Container>
  )
}

export default Load;
