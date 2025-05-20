import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Welcome({ navigation }: any) {
    return (
        // Plano de fundo com a escovinha
        <ImageBackground
            source={require('../../assets/bg-welcome.jpg')}
            style={styles.background}
            resizeMode='cover'
        >
            {/* Container */}
            <SafeAreaView style={styles.safeArea}>
                {/* Logo Odonto prev */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/logo-odontoprev.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.title}>Bem-vindo</Text>

                <Text style={styles.subtitle}>
                    Gerencie seus{' '}
                    <Text style={styles.highlight}>pacientes</Text>{' '}{'\n'}
                    e{' '}
                    <Text style={styles.highlight}>tratamentos</Text>{' '}
                    com{'\n'}
                    <Text style={styles.highlight}>eficiência</Text>.
                </Text>


                <View style={styles.spacer} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                    activeOpacity={0.85}
                >
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    // BG
    background: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: '#B5D9ED',
        height: 925,
        width: 420,
    },

    // CONTAINER

    safeArea: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    logoContainer: {
        width: 350,
        height: 60,
        marginTop: 80,
        marginBottom: 20,
    },

    // LOGO

    logo: {
        width: '100%',
        height: '100%',
    },

    // TEXTOS

    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 40,
        color: '#0063FF',
        marginBottom: 20,
        textAlign: 'left',
    },
    subtitle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: '#000',
        lineHeight: 28,
    },

    highlight: {
        fontFamily: 'Inter_700Bold',
        color: '#0063FF',
    },

    spacer: {
        flex: 1,
    },


    // BOTÃO

    button: {
        backgroundColor: '#0D1B34',
        height: 60,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
    },

    buttonText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 24,
        color: '#fff',
    },
});
