import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import colors from '../styles/colors';
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
                    <Image style={styles.image} source={require('../../assets/defaultProfile.png')} />
                    <Text style={styles.text}>Información del usuario:</Text>
                    <Text>Nombre: {user.displayName}</Text>
                    <Text>Correo electrónico: {user.email}</Text>
                    <Text>UID: {user.uid}</Text>
                </View>
            )}
            <Pressable style={styles.button}>
                <Text style={styles.text}>Editar Perfil</Text>
            </Pressable>
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
        color: colors.light,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginBottom: 30
    },
    button: {
        backgroundColor: colors.dark,
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.light,
        marginTop: 20
    }


});

export default Perfil;