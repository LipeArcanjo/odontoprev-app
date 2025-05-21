import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Só to deixando assim até integrar api do firebase!
const tratamentos = [
    {
        id: '1',
        description: 'Limpeza',
        type: 'Preventivo',
        cost: 'R$ 150',
    },
    {
        id: '2',
        description: 'Clareamento',
        type: 'Estético',
        cost: 'R$ 600',
    },
    {
        id: '3',
        description: 'Extração de ciso',
        type: 'Cirúrgico',
        cost: 'R$ 350',
    },
    {
        id: '4',
        description: 'Aparelho dentário',
        type: 'Preventivo',
        cost: 'R$ 1200',
    },
    
];

export default function TratamentosData({ navigation }: any) {
    const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.id}>
                    <FontAwesome5 name="procedures" size={20} />{' ID: '}
                    {item.id}
                </Text>
                <Text style={styles.infoText}>Descrição: {item.description}</Text>
                <Text style={styles.infoText}>Tipo: {item.type}</Text>
                <Text style={styles.infoText}>Custo: {item.cost}</Text>
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
});