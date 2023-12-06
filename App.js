import { View } from 'react-native';
import Home from './screens/Home.js';
import Cities from './screens/Cities.js';
import Quiz from './screens/Quiz.js';
import Login from './screens/Login.js';
import Header from './components/Header.js';
import Register from './screens/Register.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { BlurView } from 'expo-blur';
import styles from './styles/style.js';
import 'react-native-gesture-handler';

import Helsinki from './screens/StackNavigationCities/Helsinki.js';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Akatab': require('./assets/fonts/Akatab-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{}}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cities') {
              iconName = focused ? 'city-variant' : 'city-variant-outline';
            } else if (route.name === 'Quiz') {
              iconName = focused ? 'help-circle' : 'help-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: '#50318f' },
          tabBarActiveTintColor: 'rgb(255, 255, 255)',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Cities' component={StackNavigator} />
        <Tab.Screen name='Quiz' component={Quiz} />
        <Tab.Screen name='Profile' component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Stacknavin testailua -> toimii

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
      headerShown: false
      }}>
      <Stack.Screen name='CitiesScreen' component={Cities}/>
      <Stack.Screen name='Helsinki' component={Helsinki}/>
    </Stack.Navigator>
  )
}
