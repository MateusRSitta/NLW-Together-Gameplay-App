import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Container, GuildIconContainer, Content, Header, Title, Category, Footer, DateInfo, Date, PlayersInfo, Player } from './styles';

import { theme } from '../../global/styles/theme';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import GuildIcon from '../GuildIcon';
import { categories } from '../../utils/categories';
import { GuildProps } from '../Guild';

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type TAppointmentProps = RectButtonProps & {
    data: AppointmentProps;
}

const Appointment: React.FC<TAppointmentProps> = ({ data, ...rest }: TAppointmentProps) => {
    const [category] = categories.filter(item => item.id === data.category);

    const { owner } = data.guild;
    const { primary, on } = theme.colors;

    return (
        <RectButton
            {...rest}
        >
            <Container>
                <GuildIconContainer>
                    <GuildIcon guild_id={data.guild.id} icon={data.guild.icon} />
                </GuildIconContainer>

                <Content>
                    <Header>
                        <Title>
                            { data.guild.name }
                        </Title>

                        <Category>
                            { category.title }
                        </Category>
                    </Header>
                    
                    <Footer>
                        <DateInfo>
                            <CalendarSvg />

                            <Date>
                                { data.date }
                            </Date>
                        </DateInfo>

                        <PlayersInfo>
                            <PlayerSvg fill={ owner ? primary : on } />
                            <Player style={{ color: owner ? primary : on }}>
                                { owner ? 'Anfitrião' : 'Visitante' }
                            </Player>
                        </PlayersInfo>
                    </Footer>
                </Content>
            </Container>
        </RectButton>
    )
}

export default Appointment;
