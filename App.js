// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Workouts from './src/screens/Workouts';
import Progress from './src/screens/Progress';
import Nutrition from './src/screens/Nutrition';
import Settings from './src/screens/Settings';
import List from './src/screens/List';
import Details from './src/screens/Details';
import Perfil from './src/screens/Perfil';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './src/services/FirebaseConfig';

const Stack = createNativeStackNavigator();
const Drawer = createNativeStackNavigator();

// function Home(){
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
//   )
// }

function WorkoutsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workouts" component={Workouts} />
      {/* Puedes añadir más pantallas dentro del stack, como detalles de un ejercicio */}
    </Stack.Navigator>
  );
}

function DrawerLayout() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Workouts" component={WorkoutsStack} />
      <Drawer.Screen name="Progress" component={Progress} />
      <Drawer.Screen name="Nutrition" component={Nutrition} />
      <Drawer.Screen name="Profile" component={Perfil} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(user);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? <Stack.Screen name='MainApp' component={DrawerLayout} options={{ headerShown: false }} />
        : <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}