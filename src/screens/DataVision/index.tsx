import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert, } from 'react-native';

export default function DataVision() {
    const [idade, setIdade] = useState('');
    const [freqConsultas, setFreqConsultas] = useState('');
    const [historicoTratamento, setHistoricoTratamento] = useState(true);
    const [tratamentoPreventivo, setTratamentoPreventivo] = useState(true);
    const [houveSinistro, setHouveSinistro] = useState(false);

    const [resultado, setResultado] = useState('');

    const toggleHistorico = () => setHistoricoTratamento(!historicoTratamento);
    const togglePreventivo = () => setTratamentoPreventivo(!tratamentoPreventivo);
    const toggleHouveSinistro = () => setHouveSinistro(!houveSinistro);

    // Essa vai ser a função que tentaremos implementar a API em flask Py
    const handlePredicao = () => {
        if (!idade.trim() || !freqConsultas.trim()) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return;
        }

        if (
            Number(idade) < 70 &&
            !houveSinistro &&
            !historicoTratamento ||
            Number(freqConsultas) < 6 &&
            tratamentoPreventivo
        ) {
            setResultado('BAIXA');
        } else {
            setResultado('ALTA');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.halfCircle} />

            <Text style={styles.title}>
                Precisa verificar se um beneficiário{'\n'}tem riscos de sinistro?
            </Text>

            <View style={styles.row}>
                <View style={styles.halfInputContainer}>
                    <Text style={styles.label}>Idade</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Idade"
                        keyboardType="numeric"
                        value={idade}
                        onChangeText={setIdade}
                        placeholderTextColor="#2E6BFF"
                    />
                </View>
                <View style={styles.halfInputContainer}>
                    <Text style={styles.label}>Freq. Consultas (por mês)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Freq. Consultas"
                        keyboardType="numeric"
                        value={freqConsultas}
                        onChangeText={setFreqConsultas}
                        placeholderTextColor="#2E6BFF"
                    />
                </View>
            </View>

            <View style={[styles.row, { marginTop: 15, marginBottom: 30 }]}>
                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxLabel}>Histórico de tratamento?</Text>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            historicoTratamento ? styles.checkboxChecked : {},
                        ]}
                        onPress={toggleHistorico}
                        activeOpacity={0.7}
                    >
                        {historicoTratamento && <Text style={styles.checkmark}>✓</Text>}
                    </TouchableOpacity>
                </View>
                <View style={styles.checkboxContainer}>

                    <Text style={styles.checkboxLabel}>Fez tratamento preventivo?</Text>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            tratamentoPreventivo ? styles.checkboxChecked : {},
                        ]}
                        onPress={togglePreventivo}
                        activeOpacity={0.7}
                    >
                        {tratamentoPreventivo && <Text style={styles.checkmark}>✓</Text>}
                    </TouchableOpacity>
                </View>

                <View style={styles.checkboxContainer}>

                    <Text style={styles.checkboxLabel}>Houve sinistro?</Text>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            houveSinistro ? styles.checkboxChecked : {},
                        ]}
                        onPress={toggleHouveSinistro}
                        activeOpacity={0.7}
                    >
                        {houveSinistro && <Text style={styles.checkmark}>✓</Text>}
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={handlePredicao}
            >
                <Text style={styles.buttonText}>REALIZAR PREDIÇÃO</Text>
            </TouchableOpacity>

            {resultado ? (
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>RESULTADO:</Text>
                    <Text style={styles.resultHighlight}>{resultado}</Text>
                </View>
            ) : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Bolota pra estilizar
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

    // Container
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingTop: 70,
    },

    // Título
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#007AFF',
        paddingTop: 20,
        textAlign: 'center',
        marginBottom: 100,
    },

    // Campos de input
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    halfInputContainer: {
        flex: 1,
        marginHorizontal: 5,
    },

    label: {
        fontFamily: 'Inter_400Regular',
        color: '#204280',
        marginBottom: 6,
        fontSize: 14,
    },

    input: {
        borderWidth: 1,
        borderColor: '#2E6BFF',
        borderRadius: 8,
        height: 60,
        paddingHorizontal: 10,
        color: '#000',
    },

    // Styles para as checkbox 

    checkboxContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 120,
        height:100,
    },

    checkbox: {
        width: 50,
        height: 50,
        backgroundColor: '#A1C7FF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },

    checkboxChecked: {
        backgroundColor: '#2E6BFF',
    },

    checkmark: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    checkboxLabel: {
        flex: 1,
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#204280',
        textAlign: 'center',
    },

    // Botão
    button: {
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4894FE',
        elevation: 5,
        marginBottom: 30,
    },

    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 22,
    },

    // Resultado

    resultBox: {
        backgroundColor: '#4894FE',
        borderRadius: 20,
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    resultText: {
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        color: '#fff',
        marginBottom: 15,
    },

    resultHighlight: {
        fontSize: 48,
        fontFamily: 'Inter_700Bold',
        color: '#fff',
    },
});
