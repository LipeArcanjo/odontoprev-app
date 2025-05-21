import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const teamMembers = [
    {
        id: '1',
        avatar: require('../../assets/members/felipe.jpg'),
        name: 'Felipe Arcanjo',
        role: 'Developer Front-end Junior ',
        institution: 'FIAP',
        github: 'LipeArcanjo',
    },
    {
        id: '2',
        avatar: require('../../assets/members/giovanna.jpg'),
        name: 'Giovanna Giantomaso',
        role: 'Developer Back-end Junior',
        institution: 'FIAP',
        github: 'GiovannaGiantomaso',
    },
    {
        id: '3',
        avatar: require('../../assets/members/rebeca.jpg'),
        name: 'Rebeca Lopes',
        role: 'Developer Back-end Junior',
        institution: 'FIAP',
        github: 'rebecalopes822',
    },
];

export default function Members() {
    const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.infoText}>
                    <FontAwesome5 name="user-tag" />{' '}
                    {item.role}
                </Text>
                <Text style={styles.infoText}>
                    <FontAwesome5 name="university"/>{' '}
                    {item.institution}
                </Text>
                <Text style={styles.infoText}>
                    <FontAwesome5 name="github"/>{' '}
                    {item.github}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Membros da Equipe</Text>
            <FlatList
                data={teamMembers}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 28,
        color: '#0E4A67',
        marginBottom: 25,
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#F0F4F8',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#00000033',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
    },
    info: {
        flex: 1,
    },
    name: {
        fontFamily: 'Inter_700Bold',
        fontSize: 18,
        color: '#0D1B34',
    },
    infoText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#207198',
        marginTop: 4,
    },
});
