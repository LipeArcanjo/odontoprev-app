import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Beneficiarios({ navigation }: any) {
    return (
        <View style={styles.container}>
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

            {/* Botões principais */}
            <TouchableOpacity
                style={[styles.button, styles.buttonDark]}
                onPress={() => navigation.navigate('BeneficiariosData')}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>VISUALIZAR TODOS</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.buttonLight]}
                onPress={() => navigation.navigate('BeneficiariosCadastro')}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>

            {/* Efeito meia bola na parte inferior */}
            <View style={styles.halfCircle} />
        </View>
    );
}

const styles = StyleSheet.create({
    // CONTAINER
    container: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
    },

    //   HEADER
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
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

    //   TITULO DA PÁGINA
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#213E79',
        flex: 1,
    },

    //   BOTÕES
    button: {
        borderRadius: 15,
        paddingVertical: 30,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 10,
    },

    buttonDark: {
        backgroundColor: '#213E79',
    },

    buttonLight: {
        backgroundColor: '#63B4FF',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 24,
        textAlign: 'center',
    },

    // EFEITO DA MEIA BOLA NA PARTE INFERIOR
    halfCircle: {
        width: '60%',
        height: 180,
        backgroundColor: '#204280',
        borderRadius: 120,
        transform: [{scaleX: 2}],

        // Pra tirar ela do container
        position: 'absolute',
        bottom: 0,
        left: 100,
    },
});