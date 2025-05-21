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
            <View style={styles.halfCircle} />
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
    // BOLOTA PRA ESTILIZAR
    halfCircle: {
        width: '56%',
        height: 180,
        backgroundColor: '#007AFF',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        transform: [{ scaleX: 2 }],

        // Pra tirar ela do container
        position: 'absolute',
        top: 0,
        left: 103,
    },

    // CONTAINER
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 70,
    },

    // TÍTULO
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 32,
        color: '#FFF',
        marginBottom: 25,
        textAlign: 'center',
    },
    
    // STYLES DOS CARDS

    listContainer: {
        paddingBottom: 20,
    },

    card: {
        height: 200,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#F0F4F8',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        elevation: 2
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
        elevation: 5,
    },

    info: {
        flex: 1,
    },

    name: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#0D1B34',
    },

    infoText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#207198',
        marginTop: 4,
    },
});
