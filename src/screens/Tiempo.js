/*Componente para obtener informacion de el-tiempo.net/api/json/v2/provincias/04 */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import axios from 'axios';

const Tiempo = () => {

    const [provincias, setProvincias] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://eltiempo.net/api/json/v2/provincias/04')
            .then(response => {
                setProvincias(response.data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pagina de Tiempo</Text>
            {provincias.length > 0 ? (
                <Text>Provincias:</Text>
            ) : (
                <Text>Cargando...</Text>
            )}
            {provincias.map(provincia => (
                <Text key={provincia.id}>{provincia.nombre}</Text>
            ))}
            {error ? (
                <Text>Error: {error}</Text>
            ) : null}
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
    text: {
        fontSize: 20,
        color: colors.text,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default Tiempo;