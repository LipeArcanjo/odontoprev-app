import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/services/firebaseConfig'; // ajuste conforme seu path

export default function TratamentosCadastro() {
    const navigation = useNavigation();

    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    const [custo, setCusto] = useState('');

    const handleCadastro = async () => {
        console.log('Validando campos antes do cadastro...');
        if (!descricao.trim()) {
            Alert.alert('Erro', 'Por favor, preencha a descrição.');
            return;
        }
        if (!tipo.trim()) {
            Alert.alert('Erro', 'Por favor, preencha o tipo.');
            return;
        }
        if (!custo.trim()) {
            Alert.alert('Erro', 'Por favor, preencha o custo.');
            return;
        }

        try {
            // Grava no Firestore
            await addDoc(collection(db, 'tratamentos'), {
                descricao,
                tipo,
                custo,
                criadoEm: new Date()
            });

            Alert.alert('Sucesso', 'Tratamento cadastrado com sucesso!');
            setDescricao('');
            setTipo('');
            setCusto('');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            Alert.alert('Erro', 'Não foi possível cadastrar o tratamento.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.halfCircle} />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.7}
                >
                    <FontAwesome5 name="backward" color="#fff" size={40} />
                </TouchableOpacity>
                <Text style={styles.title}>CADASTRO</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    placeholderTextColor="#9ca6c0"
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <Text style={styles.label}>Tipo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tipo"
                    placeholderTextColor="#9ca6c0"
                    value={tipo}
                    onChangeText={setTipo}
                />

                <Text style={styles.label}>Custo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Custo (ex: R$ 150)"
                    placeholderTextColor="#9ca6c0"
                    value={custo}
                    onChangeText={setCusto}
                />
            </View>

            {/* Botão */}
            <TouchableOpacity activeOpacity={0.8} onPress={handleCadastro} style={styles.button}>
                <Text style={styles.buttonText}>REALIZAR CADASTRO</Text>
            </TouchableOpacity>
        </SafeAreaView>
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

    // FORM

    form: {
        paddingVertical: 20,
        marginBottom: 10,
    },

    label: {
        fontFamily: 'Inter_400Regular',
        color: '#2E6BFF',
        marginBottom: 5,
    },

    input: {
        borderWidth: 1,
        borderColor: '#2E6BFF',
        borderRadius: 8,
        height: 60,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: '#000',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    halfInputContainer: {
        flex: 1,
    },

    // BOTÃO DE CADASTRO

    button: {
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4894FE',
        elevation: 5,
    },

    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 24,
    },
});
