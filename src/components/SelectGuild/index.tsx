import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Container, Image, SelectBody, Label } from './styles';

import { theme } from '../../global/styles/theme';

import GuildIcon from '../GuildIcon';

import { GuildProps } from '../Guild';

type TSelectGuild = RectButtonProps & {
    guild: GuildProps;
    modalValidationError: boolean;
    handleValidationError: (value: boolean) => void;
    hasGlobalValidationError: boolean;
}

const SelectGuild: React.FC<TSelectGuild> = ({ guild, modalValidationError, handleValidationError, hasGlobalValidationError, ...rest }) => {
    return (
        <RectButton {...rest}>
            <Container hasValidationError={modalValidationError}>
            {
                guild.icon ? <GuildIcon guild_id={guild.id} icon={guild.icon} /> : <Image hasValidationError={modalValidationError} />
            }
            <SelectBody>
                <Label>
                {guild.name ? guild.name : 'Selecione um servidor'}
                </Label>
            </SelectBody>
            <Feather
                name='chevron-right'
                color={modalValidationError ? theme.colors.primary : theme.colors.heading}
                size={18}
            />
            </Container>
        </RectButton>
    )
}

export default SelectGuild;
