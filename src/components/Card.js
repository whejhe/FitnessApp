import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';

const Card = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Titulo de Card</Text>
            <Image style={styles.image} source={require('../../assets/luna.png')}></Image>
            <Text style={styles.description}>Cuerpo de Tarjeta</Text>
            <Text style={styles.textFooter}>Pie de Tarjeta</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#8087F0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    description: {
        color: '#8087F0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    textFooter: {
        color: '#8087F0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Card;