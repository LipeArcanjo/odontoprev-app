import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.halfCircle} />
            {/* Bolota pra estilizar nosso header */}
            <ScrollView contentContainerStyle={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.helloText}>Olá,</Text>
                        {/* Lembrar de implementar a função de username dinâmico após integração com login do firebase ↓ */}
                        <Text style={styles.userName}>Felipe</Text>
                    </View>
                    <Ionicons name="person-circle" size={40} color="white" style={styles.userIcon} />
                </View>

                {/* Cards de resumo */}
                <View style={styles.summaryContainer}>
                    <View style={styles.card}>
                        <FontAwesome5 name="hospital-user" color="#000" size={30}/>
                        <Text style={styles.cardNumber}>1.245</Text>
                        <Text style={styles.cardLabel}>Qtd. Beneficiários</Text>
                    </View>
                    <View style={styles.card}>
                        <FontAwesome5 name="procedures" color="#000" size={30}/>
                        <Text style={styles.cardNumber}>17</Text>
                        <Text style={styles.cardLabel}>Qtd. Tratamentos</Text>
                    </View>
                </View>

                {/* Seção de gerenciamento */}
                <View style={styles.managementContainer}>
                    <Text style={styles.sectionTitle}>GERENCIAMENTO</Text>
                    {/* View somente para deixar em row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            style={styles.managementButton}
                            onPress={() => navigation.navigate('Beneficiarios')}
                        >
                            <Image source={require('../../assets/beneficiario.png')} style={styles.icon} />
                            <Text style={styles.managementText}>BENEFICIÁRIOS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.managementButton}
                            onPress={() => navigation.navigate('Tratamentos')}
                        >
                            <Image source={require('../../assets/tratamento.png')} style={styles.icon} />
                            <Text style={styles.managementText}>TRATAMENTOS</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Card de nova feature */}
                <View style={styles.featureComing}>
                    <Text style={styles.featureText}>NOVA FEATURE{"\n"}EM BREVE</Text>
                    <Image source={require('../../assets/coming-soon.png')} style={styles.comingIcon} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // CONTAINER
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    content: {
        padding: 20,
    },

    // BOLOTA PRA ESTILIZAR
    halfCircle: {
        width: '55%',
        height: 280,
        backgroundColor: '#007AFF',
        borderBottomRightRadius: 180,
        borderBottomLeftRadius: 180,
        transform: [{ scaleX: 2 }],

        // Pra tirar ela do container
        position: 'absolute',
        top: 0,
        left: 100,
    },

    // HEADER
    header: {
        padding: 20,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    helloText: {
        fontSize: 16,
        color: '#fff',
    },

    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },

    userIcon: {
        marginLeft: 10,
    },

    // CONTAINER DE RESUMO
    summaryContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        backgroundColor: '#63B4FF',
        borderRadius: 25,
        elevation: 5,
    },

    card: {
        backgroundColor: '#fff',
        flex: 1,
        marginHorizontal: 5,
        padding: 15,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 130,
    },

    cardNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },

    cardLabel: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
    },

    // CONTAINER DE GERENCIAMENTO
    sectionTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        color: '#204280',
    },

    managementContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 20,
        backgroundColor: '#CBE1FF',
        paddingBottom: 25,
        borderRadius: 25,
        elevation: 5,
    },

    managementButton: {
        backgroundColor: '#63B4FF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: 180,
    },

    managementText: {
        marginTop: 8,
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
    },

    icon: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },

    // CONTAINER DE NOVA FEATURE

    featureComing: {
        backgroundColor: '#EBF4FF',
        borderRadius: 10,
        padding: 20,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 5,
    },

    featureText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0D1B34',
        textAlign: 'center',
    },

    comingIcon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

});
