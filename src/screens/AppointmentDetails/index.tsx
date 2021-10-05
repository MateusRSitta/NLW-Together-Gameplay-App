import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { Alert, FlatList, Platform, Share } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';

import { Banner, Title, Subtitle, Footer } from './styles';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member, { MemberProps } from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';
import Load from '../../components/Load';

import BannerImg from '../../assets/banner.png';

import { AppointmentProps } from '../../components/Appointment';

type RouteParams = {
  guildSelected: AppointmentProps;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

const AppointmentDetails: React.FC = () => {
  const route = useRoute();
  const { guildSelected } = route.params as RouteParams;

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

      setWidget(response.data);
    } catch {
      Alert.alert('Verifique as configurações do servidor. O Widget está habilitado?');
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' ? `Junte-se à ${guildSelected.guild.name}` : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  function handleRedirectDiscordServer() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <>
      <Header
        title='Detalhes'
        action={
          guildSelected.guild.owner &&
          <BorderlessButton onPress={handleShareInvitation}>
            <Feather name='share' size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <Background>
        <Banner source={BannerImg}>
          <Title>
            {guildSelected.guild.name}
          </Title>
          <Subtitle>
            {guildSelected.description}
          </Subtitle>
        </Banner>

        {
          loading ? <Load /> :
          <>
            <ListHeader
              title='Jogadores'
              subtitle={`Total ${widget.id ? widget.members.length : '0'}`}
            />
            <FlatList
              data={widget.members}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <Member data={item} />}
              ItemSeparatorComponent={() => <ListDivider width={80} />}
              style={{
                marginLeft: 24
              }}
              contentContainerStyle={{
                paddingBottom: getBottomSpace() + 56 + 30 + 24
              }}
              overScrollMode='never'
              showsVerticalScrollIndicator={false}
            />
          </>
        }

        {
          guildSelected.guild.owner &&
          <Footer>
            <ButtonIcon
              title='Entrar no servidor do Discord'
              onPress={handleRedirectDiscordServer}
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.4,
                shadowRadius: 10,
                elevation: 5
              }}
            />
          </Footer>
        }
      </Background>
    </>
  );
}

export default AppointmentDetails;
