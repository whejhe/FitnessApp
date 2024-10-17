import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.image} source={require('../../assets/luna.png')} />
            <Text style={styles.headerText}>Fitness App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#8087F0',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    headerText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default Header;