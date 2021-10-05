import React, { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';

import { Container, Header } from './styles';

import Background from '../../components/Background';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategoryList from '../../components/CategoryList';
import ListHeader from '../../components/ListHeader';
import Appointment, { AppointmentProps } from '../../components/Appointment';
import ListDivider from '../../components/ListDivider';
import Load from '../../components/Load';
import ModalView from '../../components/ModalView';
import Logout from '../../components/Logout';

import { COLLECTION_APPOINTMENTS } from '../../config/database';

const Home: React.FC = () => {
    const navigation = useNavigation();

    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const [modalVisible, setModalVisible] = useState(false);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected });
    }

    async function loadAppointments() {
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storageResponse: AppointmentProps[] = storage ? JSON.parse(storage) : [];

        if (category) {
            setAppointments(storageResponse.filter(appointment => appointment.category === category));
        } else {
            setAppointments(storageResponse);
        }

        setLoading(false);
    }

    function handleOpenModal() {
        setModalVisible(true);
    }

    function handleCloseModal() {
        setModalVisible(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

    return (
        <>
            <Background>
                <Container>
                    <Header>
                        <Profile openModal={handleOpenModal} />
                        <ButtonAdd
                            onPress={handleAppointmentCreate}
                        />
                    </Header>

                    <CategoryList
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />

                    {
                        loading ? <Load /> :
                        <>
                            <ListHeader title='Partidas agendadas' subtitle={`Total ${appointments.length}`} />
                            <FlatList
                                data={appointments}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <Appointment
                                        data={item}
                                        onPress={() => handleAppointmentDetails(item)}
                                    />
                                )}
                                ItemSeparatorComponent={() => <ListDivider width={80} />}
                                contentContainerStyle={{ paddingBottom: 70 }}
                                style={{
                                    marginLeft: 24
                                }}
                                showsVerticalScrollIndicator={false}
                                overScrollMode='never'
                            />
                        </>
                    }
                </Container>
            </Background>
            <ModalView height={30} visible={modalVisible} handleCloseModal={handleCloseModal}>
                <Logout closeModal={handleCloseModal} />
            </ModalView>
        </>
    )
}

export default Home;
