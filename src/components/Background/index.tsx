import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

type Props = {
    children: ReactNode;
}

const Background: React.FC<Props> = ({ children }) => {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style={{ flex: 1 }}
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient>
    )
}

export default Background;
