import React from 'react';

import { Container } from './styles';

type TListDividerProps = {
    width: number;
}

const ListDivider: React.FC<TListDividerProps> = ({ width }) => {
    return (
        <Container style={{ width: `${width}%` }} />
    )
}

export default ListDivider;
