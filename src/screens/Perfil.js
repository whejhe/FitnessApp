import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../services/FirebaseConfig';



const Perfil = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            try {
                setUser(user);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        });
    }, []);
    return (
        <View style={styles.container}>
            {user && (
                <View>
                    <Text style={styles.text}>Información del usuario:</Text>
                    <Text>Nombre: {user.displayName}</Text>
                    <Text>Correo electrónico: {user.email}</Text>
                    <Text>UID: {user.uid}</Text>
                </View>
            )}
            <Text style={styles.text}>Pagina de Perfil</Text>
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
    text: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }

});

export default Perfil;