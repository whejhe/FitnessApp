import Ract from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Pie de App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#8087F0',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    footerText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default Footer;