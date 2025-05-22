import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/services/firebaseConfig';

export default function BeneficiariosCadastro() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleCadastro = async () => {
        console.log('Validando campos antes do cadastro...');
        if (!nome.trim()) {
            Alert.alert('Erro', 'Por favor, preencha o nome.');
            return;
        }
        if (!email.trim()) {
            Alert.alert('Erro', 'Por favor, preencha o e-mail.');
            return;
        }
        if (!endereco.trim()) {
            Alert.alert('Erro', 'Por favor, preencha o endereço.');
            return;
        }
        if (!dataNascimento.trim()) {
            Alert.alert('Erro', 'Por favor, preencha a data de nascimento.');
            return;
        }
        if (!genero.trim()) {
            Alert.alert('Erro', 'Por favor, preencha o gênero.');
            return;
        }
        if (!telefone.trim()) {
            Alert.alert('Erro', 'Por favor, preencha o telefone.');
            return;
        }

        try {
            await addDoc(collection(db, 'beneficiarios'), {
                nome,
                email,
                endereco,
                dataNascimento,
                genero,
                telefone,
                criadoEm: new Date()
            });

            Alert.alert('Sucesso', 'Beneficiário cadastrado com sucesso!');
            setNome('');
            setEmail('');
            setEndereco('');
            setDataNascimento('');
            setGenero('');
            setTelefone('');
        } catch (error) {
            console.error('Erro ao cadastrar beneficiário:', error);
            Alert.alert('Erro', 'Não foi possível cadastrar o beneficiário.');
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
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#9ca6c0"
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#9ca6c0"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Endereço</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    placeholderTextColor="#9ca6c0"
                    value={endereco}
                    onChangeText={setEndereco}
                />

                <View style={styles.row}>
                    <View style={[styles.halfInputContainer, { marginRight: 10 }]}>
                        <Text style={styles.label}>Data de nascimento</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="dd/mm/aaaa"
                            placeholderTextColor="#9ca6c0"
                            value={dataNascimento}
                            onChangeText={setDataNascimento}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.halfInputContainer}>
                        <Text style={styles.label}>Gênero</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="M / F"
                            placeholderTextColor="#9ca6c0"
                            value={genero}
                            onChangeText={setGenero}
                            maxLength={1}
                            autoCapitalize="characters"
                        />
                    </View>
                </View>

                <Text style={styles.label}>Telefone</Text>
                <TextInput
                    style={styles.input}
                    placeholder="(XX) XXXXX-XXXX"
                    placeholderTextColor="#9ca6c0"
                    keyboardType="phone-pad"
                    value={telefone}
                    onChangeText={setTelefone}
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
