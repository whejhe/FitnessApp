import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import Perfil from '../screens/Perfil';
import { StyleSheet } from 'react-native';


const Tabs = createBottomTabNavigator();

const FooterNavHome = () => {
    return (
        <Tabs.Navigator style={styles.container} screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="Settings" component={Settings} />
            <Tabs.Screen name="Perfil" component={Perfil} />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        
    },
});

export default FooterNavHome;