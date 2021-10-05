import React from 'react';

import { Container, Content, Title, Status, NameStatus, BulletStatus } from './styles';

import Avatar from '../Avatar';

import { theme } from '../../global/styles/theme';

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type TMemberProps = {
    data: MemberProps;
}

const Member: React.FC<TMemberProps> = ({ data }) => {
    const isOnline = data.status === 'online';

    const { on, primary } = theme.colors;

    return (
        <Container>
            <Avatar urlImage={data.avatar_url} />

            <Content>
                <Title>{data.username}</Title>

                <Status>
                    <BulletStatus style={{ backgroundColor: `${isOnline ? on : primary}` }} />

                    <NameStatus>
                        { isOnline ? 'Disponível' : 'Ocupado' }
                    </NameStatus>
                </Status>
            </Content>
        </Container>
    )
}

export default Member;
