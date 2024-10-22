import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const Button = ({ title, onPress }) => {
    return(
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: colors.color5,
        borderRadius: 8,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.dark,
        width: 250
    },
    text:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default Button;