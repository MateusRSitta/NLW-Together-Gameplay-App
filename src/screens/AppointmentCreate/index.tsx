import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { View, Platform, ActivityIndicator, Alert } from 'react-native';

import { theme } from '../../global/styles/theme';

import { Container, ScrollPage, Label, Form, Field, Column, Divider, Span, Footer } from './styles';

import Background from '../../components/Background';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import SelectGuild from '../../components/SelectGuild';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import ModalView from '../../components/ModalView';
import Guilds from '../Guilds';
import { GuildProps } from '../../components/Guild';

import { COLLECTION_APPOINTMENTS } from '../../config/database';

const AppointmentCreate: React.FC = () => {
  const navigation = useNavigation();

  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [loading, setLoading] = useState(false);

  const defaultValue = 1111;

  const [day, setDay] = useState(defaultValue);
  const [month, setMonth] = useState(defaultValue);
  const [hour, setHour] = useState(defaultValue);
  const [minute, setMinute] = useState(defaultValue);
  const [description, setDescription] = useState('');

  const [hasValidationError, setHasValidationError] = useState(false);
  const [hasGlobalValidationError, setHasGlobalValidationError] = useState(false);
  const [modalValidationError, setModalValidationError] = useState(false);

  useEffect(() => {
    if (hasGlobalValidationError) {
      if (!guild.id) {
        setModalValidationError(true);
      }
    }
  }, [hasGlobalValidationError]);

  function handleValidationError(value: boolean) {
    setHasValidationError(value);

    if (!value) setHasGlobalValidationError(false);
  }
  
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
    setModalValidationError(false);
    setHasGlobalValidationError(false);
  }

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);

    if (!guild.id) setModalValidationError(true);
  }
  
  async function handleAppointmentCreate() {
    if (!category || !guild.id || !day || !month || !hour || !minute || !description) {
      setHasGlobalValidationError(true);
      return Alert.alert('Por favor, preencha todos os campos');
    }

    setLoading(true);

    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));

    navigation.navigate('Home');
  }

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header
        title='Agendar partida'
        modalVisible={openGuildsModal}
      />
      <Background>
        <ScrollPage contentContainerStyle={{ paddingTop: 100 }}>
          <Label style={{ marginLeft: 24, marginTop: 32, marginBottom: 12 }}>
            Categoria
          </Label>

          <CategoryList categorySelected={category} setCategory={handleCategorySelect} hasCheckBox />

          <Form>
            <SelectGuild
              onPress={handleOpenGuildsModal}
              guild={guild}
              modalValidationError={modalValidationError}
              handleValidationError={handleValidationError}
              hasGlobalValidationError={hasGlobalValidationError}
            />

            <Field>
              <View>
                <Label style={{ marginBottom: 12 }}>Dia e mês</Label>

                <Column>
                  <SmallInput
                    type="day"
                    maxLength={2}
                    setState={setDay}
                    state={day}
                    defaultValue={defaultValue}
                    handleValidationError={handleValidationError}
                    hasGlobalValidationError={hasGlobalValidationError}
                  />
                  <Divider>/</Divider>
                  <SmallInput
                    type="month"
                    maxLength={2}
                    setState={setMonth}
                    state={month}
                    defaultValue={defaultValue}
                    handleValidationError={handleValidationError}
                    hasGlobalValidationError={hasGlobalValidationError}
                  />
                </Column>
              </View>

              <View>
                <Label style={{ marginBottom: 12 }}>Hora e minuto</Label>

                <Column>
                  <SmallInput
                    type="hour"
                    maxLength={2}
                    setState={setHour}
                    state={hour}
                    defaultValue={defaultValue}
                    handleValidationError={handleValidationError}
                    hasGlobalValidationError={hasGlobalValidationError}
                  />
                  <Divider>:</Divider>
                  <SmallInput
                    type="minute"
                    maxLength={2}
                    setState={setMinute}
                    state={minute}
                    defaultValue={defaultValue}
                    handleValidationError={handleValidationError}
                    hasGlobalValidationError={hasGlobalValidationError}
                  />
                </Column>
              </View>
            </Field>

            <Field style={{ marginBottom: 12 }}>
              <Label>Descrição</Label>

              <Span>Max 100 caracteres</Span>
            </Field>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
              state={description}
              handleValidationError={handleValidationError}
              hasGlobalValidationError={hasGlobalValidationError}
            />

            <Footer>
              {
                loading ? <ActivityIndicator color={theme.colors.primary} /> :
                <>
                  {
                    hasValidationError || hasGlobalValidationError ? <Button title='Agendar' style={{ opacity: 0.5 }} /> :
                    <Button title='Agendar' onPress={handleAppointmentCreate} />
                  }
                </>
              }
            </Footer>
          </Form>
        </ScrollPage>
      </Background>
      <ModalView height={70} visible={openGuildsModal} handleCloseModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </Container>
  );
}

export default AppointmentCreate;
