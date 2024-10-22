import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import FooterNavHome from '../navigation/FooterNavHome';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pagina de Inicio</Text>
            <FooterNavHome />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    text:{
        color: colors.whiteText,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
    
});



export default Home;