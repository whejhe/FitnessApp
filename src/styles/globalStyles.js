import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    text: {
        fontSize: 16,
        color: '#333',
        fontFamily: 'OpenSans-Regular',
    },
    header: {
        fontSize: 24,
        color: '#333',
        fontFamily: 'OpenSans-Bold',
        marginBottom: 10,
    },
    link: {
        color: '#337ab7',
        textDecorationLine: 'underline',
    },
});

export default globalStyles;