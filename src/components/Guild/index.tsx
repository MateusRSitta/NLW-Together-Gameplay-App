import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Content, Title, Type } from './styles';

import GuildIcon from '../GuildIcon';

import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type TGuildProps = TouchableOpacityProps & {
    data: GuildProps;
}

const Guild: React.FC<TGuildProps> = ({ data, ...rest }) => {
  return (
      <Container
        activeOpacity={0.7}
        {...rest}
      >
        <GuildIcon icon={data.icon} guild_id={data.id} />

        <Content>
            <View>
                <Title>
                    {data.name}
                </Title>

                <Type>
                    { data.owner ? 'Administrador' : 'Convidado' }
                </Type>
            </View>
        </Content>

        <Feather
            name='chevron-right'
            color={theme.colors.heading}
            size={24}
        />
      </Container>
  )
}

export default Guild;
