import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Perfil from '../screens/Perfil';

const FooterTab = createBottomTabNavigator();

const FooterNavegator = () => {
    return (
        <FooterTab.Navigator>
            <FooterTab.Screen name="Home" component={Home} />
            <FooterTab.Screen name="Settings" component={Settings} />
            <FooterTab.Screen name="Perfil" component={Perfil} />
        </FooterTab.Navigator>
    );
}

export default FooterNavegator;