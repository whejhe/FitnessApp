import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import colors from '../styles/colors';
import { Header } from 'react-native/Libraries/NewAppScreen';

const CardData = () => {
    return [
        {
            title: 'Dieta y Nutricion',
            image: require('../../assets/nutricion.jpg'),
            description: 'Descripción aqui...'
        },
        {
            title: 'Rutina de Ejercicios',
            image: require('../../assets/rutinaEjercicios.png'),
            description: 'Descripción aqui...'
        },
        {
            title: 'Entrenamiento de Musculacion',
            image: require('../../assets/musculacion.jpg'),
            description: 'Descripción aqui...'
        },
        {
            title: 'Entrenamiento de Crossfit',
            image: require('../../assets/CrossFit.jpg'),
            description: 'Descripción aqui...'
        },
    ];
}

const renderItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.image} source={item.image}></Image>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
};

const FitnessArticles = () => {
    const data = CardData();
    return (
        <ImageBackground source={require('../../assets/fitnessBackground.jpg')} style={styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.tertiaryRGBA,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginBottom: 10,
        marginTop: 10,
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    image: {
        display: 'block',
        float: 'left',
        width: 350,
        height: 200,
        resizeMode: 'cover',
    },
    description: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 14,
        padding: 5,
        marginBottom: 5
    }

});

export default FitnessArticles;