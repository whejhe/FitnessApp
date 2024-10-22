import React from 'react';
import { View, Pressable, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../styles/colors';


const Card = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dieta y Nutricion</Text>
            <Image style={styles.image} source={{ uri: 'https://www.cun.es/dam/cun/imagen/cabeceras/banner-alimentacion-deporte.webp'}}></Image>            
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisl ante. Curabitur a sapien quis nulla suscipit imperdiet. Donec id diam sit amet urna pharetra mollis. Proin at erat sodales, lacinia risus non, iaculis mauris. Nunc pharetra tellus odio, id consectetur est porttitor et. Etiam in accumsan nibh. Mauris euismod vel felis non vehicula. Ut eget fringilla dui, a placerat turpis. Vivamus varius eros velit, vitae dapibus arcu dignissim nec. Cras euismod, mi non faucibus suscipit, ipsum risus mattis lacus, a sollicitudin nulla sapien eu neque.
            </Text>
            <Text style={styles.textFooter}>Fecha de Cierre</Text>
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
        height: 'fit-content',
    },
    title: {
        color: '#8087F0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        marginTop: 0,
        marginBottom: 0
    },
    image: {
        display: 'block',
        float: 'left',
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    description: {
        color: '#8087F0',
        textAlign: 'left',
        fontSize: 14,
        padding: 5,
        marginLeft: 10, 
        marginRight: 10
    },
    textFooter: {
        color: '#8087F0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Card;