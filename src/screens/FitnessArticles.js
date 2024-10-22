import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../styles/colors';

const CardData = () => {
    const data = [
        {
            title: 'Dieta y Nutricion',
            image: 'https://www.cun.es/dam/cun/imagen/cabeceras/banner-alimentacion-deporte.webp',
        }
    ]
}

const FitnessArticles = (item) => {
    <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={{ uri: item.image }}></Image>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.textFooter}>Fecha de Cierre</Text>
    </View>

    return (
        <FlatList
            data={Card}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
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
    text:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
    
});

export default FitnessArticles;