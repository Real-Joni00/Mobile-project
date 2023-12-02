import { View } from 'react-native';
import Home from './screens/Home.js';
import Cities from './screens/Cities.js';
import Quiz from './screens/Quiz.js';
import Profile from './screens/Profile.js';
import Header from './components/Header.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { BlurView } from 'expo-blur';
import styles from './styles/style.js';

const Tab = createBottomTabNavigator();

export default function App() {

  const [loaded] = useFonts({
    'Poppins' : require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Akatab' : require('./assets/fonts/Akatab-Regular.ttf'),
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
        <Tab.Screen name='Cities' component={Cities} />
        <Tab.Screen name='Quiz' component={Quiz} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
