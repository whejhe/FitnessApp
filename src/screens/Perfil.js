import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../services/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import colors from '../styles/colors';



const Perfil = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
            if (user) {
                try {
                    setUser(user);
                    // Obtener la información del usuario desde Firestore
                    const docRef = doc(FIRESTORE_DB, "usuarios", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        setNombre(userData.nombre || '');
                        setEmail(userData.email || user.email); // Usar email de Firebase Auth si no existe en Firestore
                    }
                    setLoading(false);
                } catch (error) {
                    setError(error.message); // Actualizar con el mensaje, no con el objeto Error
                    setLoading(false);
                }
            }
        });
        return unsubscribe;
    }, []);
    
    const handleSave = async () => {
        if (!user) return;

        try {
            // Guardar los datos del usuario en Firestore
            await setDoc(doc(FIRESTORE_DB, "usuarios", user.uid), {
                nombre,
                email,
            });
            setIsEditing(false); // Finalizar la edición
        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color={colors.light} />;
    }

    return (
        <ImageBackground source={require('../../assets/profile-background.jpg')} style={styles.container}>
            {error && <Text style={styles.error}>{error}</Text>}
            {user && (
                <View>
                    <Image style={styles.image} source={require('../../assets/defaultProfile.png')} />
                    <Text style={styles.text}>Información del usuario:</Text>
                    {isEditing ? (
                        <>
                            <TextInput style={styles.input} value={nombre}
                                onChangeText={setNombre} placeholder="Nombre"
                            />
                            <TextInput style={styles.input} value={email}
                                onChangeText={setEmail} placeholder="Correo electrónico"
                            />
                            <Pressable style={styles.button} onPress={handleSave}>
                                <Text style={styles.text}>Guardar</Text>
                            </Pressable>
                        </>
                    ) : (
                        <>
                            <Text style={styles.text}>Nombre: {nombre}</Text>
                            <Text style={styles.text}>Correo electrónico: {email}</Text>
                            <Text style={styles.text}>UID: {user.uid}</Text>
                            <Pressable style={styles.button} onPress={() => setIsEditing(true)}>
                                <Text style={styles.text}>Editar Perfil</Text>
                            </Pressable>
                        </>
                    )}
                </View>
            )}
        </ImageBackground>
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
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colors.light,
        borderRadius: 8,
        backgroundColor: colors.light
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginBottom: 30,
        borderColor: colors.light,
        borderWidth: 3
    },
    button: {
        backgroundColor: colors.dark,
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.light,
        marginTop: 20
    },
    error: {
        color: 'red',
        marginBottom: 10,
    }
});

export default Perfil;