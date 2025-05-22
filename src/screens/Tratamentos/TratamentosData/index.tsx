import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/services/firebaseConfig';

interface Tratamento {
    id: string;
    descricao: string;
    tipo: string;
    custo: string;
}


export default function TratamentosData({ navigation }: any) {
    const [tratamentos, setTratamentos] = useState<Tratamento[]>([]);

    useEffect(() => {
        const fetchTratamentos = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'tratamentos'));
                const data: Tratamento[] = snapshot.docs.map((doc) => {
                    const docData = doc.data() as Omit<Tratamento, 'id'>;
                    return {
                        id: doc.id,
                        ...docData,
                    };
                });
                setTratamentos(data);
            } catch (error) {
                console.error('Erro ao buscar tratamentos:', error);
            }
        };

        fetchTratamentos();
    }, []);

    const excluirTratamento = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'tratamentos', id));
            setTratamentos((prev) => prev.filter((t) => t.id !== id));
        } catch (error) {
            console.error('Erro ao excluir tratamento:', error);
        }
    };

    const renderItem = ({ item }: { item: Tratamento }) => (
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.id}>
                    <FontAwesome5 name="procedures" size={20} /> {item.descricao}
                </Text>
                <Text style={styles.infoText}>ID: {item.id}</Text>
                <Text style={styles.infoText}>Tipo: {item.tipo}</Text>
                <Text style={styles.infoText}>Custo: {item.custo}</Text>
            </View>

            <TouchableOpacity
                onPress={() => excluirTratamento(item.id)}
                style={styles.deleteButton}
                activeOpacity={0.7}
            >
                <FontAwesome5 name="trash-alt" size={22} color="#ff4d4d" />
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={styles.container}>
            <View style={styles.halfCircle} />

            {/* Cabeçalho com texto e botão voltar */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <FontAwesome5 name="backward" color="#fff" size={40} />
                </TouchableOpacity>
                <Text style={styles.title}>TRATAMENTOS</Text>
            </View>

            <FlatList
                data={tratamentos}
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

    header: {
        flexDirection: 'row',
        marginBottom: 32,
        alignItems: 'center',
    },

    //   BOTÃO DE VOLTAR
    backButton: {
        backgroundColor: '#213E79',
        borderRadius: 100,
        padding: 8,
        marginRight: 16,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // TÍTULO
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 32,
        color: '#FFF',
    },

    // STYLES DOS CARDS

    listContainer: {
        paddingBottom: 20,
    },

    card: {
        height: 150,
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

    info: {
        flex: 1,
    },

    id: {
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

    // BOTÕES

    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24,
    },
});