// Details.js

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CierreDeSesion = ({}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Cierre de Sesion</Text>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Logout</Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8087F0',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    button:{
        padding: 10,
        backgroundColor: '#323446',
        borderRadius: 8,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#F0D262',
        width: 250
    },
    text:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
    
});

export default CierreDeSesion;