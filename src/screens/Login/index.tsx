import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Login({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Somente uma função de login temporária, na qual será substituída quando a integração com o Firebase for feita
        console.log('Email:', email);
        console.log('Password:', password);
        navigation.navigate('Home'); // Navegação após login
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/logo-bytergf.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#7F7F7F"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#7F7F7F"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.forgotPassword}>Esqueceu a senha? Ligue pro suporte 0800 000</Text>
            </View>

            {/* Efeito meia bola na parte inferior */}
            <View style={styles.halfCircle}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // CONTAINER
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
        paddingTop: 100,
        gap: 50,
    },

    // LOGO

    logo: {
        height: 250,
        marginHorizontal: 'auto',
    },

    // TEXTOS

    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 32,
        color: '#0E4A67',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 60,
        borderColor: '#207198',
        borderWidth: 2,
        borderRadius: 8,
        paddingLeft: 20,
        marginBottom: 20,
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#000',
    },

    forgotPassword:{
        color: '#207198',
        textAlign: 'center',
        fontSize: 16,
    },

    // BOTÃO

    button: {
        backgroundColor: '#0D1B34',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
    },
    buttonText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 18,
        color: '#fff',
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
        bottom: -100,
        left: 100,
    },
});
