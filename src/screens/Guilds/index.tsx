import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { api } from '../../services/api';

import { Container } from './styles';

import Guild, { GuildProps } from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
import Load from '../../components/Load';

type TGuildsProps = {
  handleGuildSelect: (guild: GuildProps) => void,
}

const Guilds: React.FC<TGuildsProps> = ({ handleGuildSelect }) => {
  const [guilds, setGuilds] = useState<GuildProps[]>();
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    if (loading) fetchGuilds();
  }, []);

  return (
      <Container>
        {
          loading ? <Load /> :
          <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Guild data={item} onPress={() => handleGuildSelect(item)} />
            )}
            ItemSeparatorComponent={() => <ListDivider width={75} />}
            showsVerticalScrollIndicator={false}
            overScrollMode='never'
            contentContainerStyle={{ paddingBottom: 70 }}
            style={{ width: '100%' }}
          />
        }
      </Container>
  )
}

export default Guilds;
