import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebaseConfig';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    institution: string;
    github: string;
    avatarFile: string;
    avatar: any;
}

export default function Members() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

    // Como o firebase storage é pago fiz essa gambiarra mas está puxando o src pela API!
    const getLocalImage = (filename: string) => {
        switch (filename) {
            case 'felipe.jpg':
                return require('../../assets/members/felipe.jpg');
            case 'giovanna.jpg':
                return require('../../assets/members/giovanna.jpg');
            case 'rebeca.jpg':
                return require('../../assets/members/rebeca.jpg');
        }
    };

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const membersRef = collection(db, 'members');
                const querySnapshot = await getDocs(membersRef);

                const membersData: TeamMember[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data() as Omit<TeamMember, 'id' | 'avatar'>;
                    const avatar = getLocalImage(data.avatarFile);
                    return {
                        id: doc.id,
                        ...data,
                        avatar,
                    };
                });

                setTeamMembers(membersData);
            } catch (error) {
                console.error('Erro ao buscar membros:', error);
            }
        };

        fetchMembers();
    }, []);

    const renderItem = ({ item }: { item: TeamMember }) => (
        <View style={styles.card}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.infoText}>
                    <FontAwesome5 name="user-tag" /> {item.role}
                </Text>
                <Text style={styles.infoText}>
                    <FontAwesome5 name="university" /> {item.institution}
                </Text>
                <Text style={styles.infoText}>
                    <FontAwesome5 name="github" /> {item.github}
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
