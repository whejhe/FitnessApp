import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../styles/colors';

const Loader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loader;