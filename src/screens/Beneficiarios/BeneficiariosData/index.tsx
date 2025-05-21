import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Só to deixando assim até integrar api do firebase!
const beneficiarios = [
    {
        id: '1',
        name: 'Enzo Lucas',
        birthday: '28/04/2016',
        genre: 'M',
        email: 'enzo.lucas@email.com',
        address: 'Rua das Flores, 123',
        phone: '(11) 99999-1111',
    },
    {
        id: '2',
        name: 'Cleiton Santos',
        birthday: '17/04/2004',
        genre: 'M',
        email: 'cleiton.santos@email.com',
        address: 'Avenida Central, 456',
        phone: '(21) 98888-2222',
    },
    {
        id: '3',
        name: 'Elisangela Cristina',
        birthday: '03/01/1985',
        genre: 'F',
        email: 'elisangela.cristina@email.com',
        address: 'Rua das Palmeiras, 789',
        phone: '(31) 97777-3333',
    },
    {
        id: '4',
        name: 'Jorge da Silva',
        birthday: '07/06/1972',
        genre: 'M',
        email: 'jorge.silva@email.com',
        address: 'Travessa dos Pinheiros, 101',
        phone: '(41) 96666-4444',
    },
    {
        id: '5',
        name: 'Valentina Menina',
        birthday: '29/09/2018',
        genre: 'F',
        email: 'valentina.menina@email.com',
        address: 'Praça das Acácias, 202',
        phone: '(51) 95555-5555',
    },
];

export default function BeneficiariosData({ navigation }: any) {
    const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.name}>
                    <FontAwesome5 name="user-alt" size={20} />{' '}
                    {item.name}
                </Text>
                <Text style={styles.infoText}>Data de nascimento: {item.birthday}</Text>
                <Text style={styles.infoText}>Gênero: {item.genre}</Text>
                {/* Botão de exibir detalhes */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        alert(
                            `Detalhes do Beneficiário:\n\n` +
                            `ID: ${item.id}\n` +
                            `Nome: ${item.name}\n` +
                            `Data de Nascimento: ${item.birthday}\n` +
                            `Gênero: ${item.genre}\n` +
                            `Email: ${item.email}\n` +
                            `Endereço: ${item.address}\n` +
                            `Telefone: ${item.phone}`
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