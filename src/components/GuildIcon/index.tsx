import React from 'react';

import { Container, Picture } from './styles';

import DiscordSvg from '../../assets/discord.svg';

type TGuildIconProps = {
    icon: string | null;
    guild_id: string;
}

const { CDN_IMAGE } = process.env;

const GuildIcon: React.FC<TGuildIconProps> = ({ icon, guild_id }) => {
    const uri = `${CDN_IMAGE}/icons/${guild_id}/${icon}.png`;

    return (
        <Container>
            {
                icon ?
                <Picture
                    source={{ uri }}
                    resizeMode='cover'
                />
                :
                <DiscordSvg width={40} height={40} />
            }
        </Container>
    )
}

export default GuildIcon;
