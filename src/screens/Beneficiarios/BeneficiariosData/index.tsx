import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebaseConfig';


interface Beneficiario {
    id: string;
    nome: string;
    dataNascimento: string;
    genero: string;
    email: string;
    endereco: string;
    telefone: string;
}

export default function BeneficiariosData({ navigation }: any) {
    const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([]);

    useEffect(() => {
        const fetchBeneficiarios = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'beneficiarios'));
                const data: Beneficiario[] = snapshot.docs.map((doc) => {
                    const docData = doc.data() as Omit<Beneficiario, 'id'>;
                    return {
                        id: doc.id,
                        ...docData,
                    };
                });
                setBeneficiarios(data);
            } catch (error) {
                console.error('Erro ao buscar beneficiários:', error);
            }
        };

        fetchBeneficiarios();
    }, []);


    const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.name}>
                    <FontAwesome5 name="user-alt" size={20} /> {item.nome}
                </Text>
                <Text style={styles.infoText}>Data de nascimento: {item.dataNascimento}</Text>
                <Text style={styles.infoText}>Gênero: {item.genero}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        alert(
                            `Detalhes do Beneficiário:\n\n` +
                            `ID: ${item.id}\n` +
                            `Nome: ${item.nome}\n` +
                            `Data de Nascimento: ${item.dataNascimento}\n` +
                            `Gênero: ${item.genero}\n` +
                            `Email: ${item.email}\n` +
                            `Endereço: ${item.endereco}\n` +
                            `Telefone: ${item.telefone}`
                        )
                    }
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}>Exibir detalhes</Text>
                </TouchableOpacity>
            </View>
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
                <Text style={styles.title}>BENEFICIÁRIOS</Text>
            </View>

            <FlatList
                data={beneficiarios}
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

    button: {
        marginTop: 12,
        backgroundColor: '#F3F6F9',
        paddingVertical: 10,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#4894FE',
        fontWeight: '700',
        fontSize: 16,
        opacity: 1,
    },
});