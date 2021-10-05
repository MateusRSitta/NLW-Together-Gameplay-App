import React from 'react';

import { Container, Title, Subtitle } from './styles';

type TListHeaderProps = {
    title: string;
    subtitle: string;
}

const ListHeader: React.FC<TListHeaderProps> = ({ title, subtitle }: TListHeaderProps) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}

export default ListHeader;
