// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from './src/screens/auth/Login';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './src/services/FirebaseConfig';
import MenuDesplegable from './src/navigation/MenuDesplegable';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
        setUser(user);
      });
      // console.log(user);
      return unsubscribe;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? <Stack.Screen name='MainApp' component={MenuDesplegable} options={{ headerShown: false }} />
        : <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}