import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import colors from '../styles/colors';
import Header from '../components/Header';

const Home = () => {
    return (
        <ImageBackground source={require('../../assets/fitnessBackground.jpg')} style={styles.container}>
            <Header />
            <Text style={styles.text}>Pagina de Inicio</Text>
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text:{
        color: colors.dark,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: colors.lightRGBA,
        padding: 10
    }
    
});



export default Home;