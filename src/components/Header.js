import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';


const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Fitness App</Text>
            <Image style={styles.image} source={require('../../assets/luna.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.primary,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    headerText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        width: 'fit-content',
        fontFamily: 'monospace',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
});

export default Header;